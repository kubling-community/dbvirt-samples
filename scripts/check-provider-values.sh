#!/usr/bin/env bash

set -euo pipefail

repository_root="$(git rev-parse --show-toplevel)"
cd "${repository_root}"

printf 'Validating Provider Values static contract (no containers will be started).\n'

compose_file="provider-values/compose.yaml"
vdb_file="provider-values/descriptor/vdb/ProviderValuesVDB.yaml"

required_files=(
  "${compose_file}"
  provider-values/README.md
  provider-values/app-config.yaml
  provider-values/descriptor/bundle-info.yaml
  "${vdb_file}"
  provider-values/scripts/smoke-test.sh
)

for required_file in "${required_files[@]}"; do
  if [[ ! -f "${required_file}" ]]; then
    printf 'ERROR: required Provider Values file is missing: %s\n' "${required_file}" >&2
    exit 1
  fi
done

docker compose -f "${compose_file}" config --quiet
sh -n provider-values/scripts/smoke-test.sh

mapfile -t images < <(docker compose -f "${compose_file}" config --images | sort -u)
expected_images=(
  docker.io/curlimages/curl:latest
  docker.io/fullstorydev/grpcurl:latest
  docker.io/kubling/kubling-cli:latest
  docker.io/kubling/kubling:latest
  docker.io/kubling/inmemory-provider:latest
)

for expected_image in "${expected_images[@]}"; do
  if ! printf '%s\n' "${images[@]}" | grep -Fqx "${expected_image}"; then
    printf 'ERROR: Provider Values image is missing or changed: %s\n' "${expected_image}" >&2
    exit 1
  fi
done

for image in "${images[@]}"; do
  if ! printf '%s\n' "${expected_images[@]}" | grep -Fqx "${image}"; then
    printf 'ERROR: unexpected Provider Values image: %s\n' "${image}" >&2
    exit 1
  fi
done

grep -Fq 'name: "ProviderValuesVDB"' "${vdb_file}"
grep -Fq 'name: "provider"' "${vdb_file}"
grep -Fq 'dataSourceType: "PROVIDER_GRPC"' "${vdb_file}"
grep -Fq 'provider.TYPE_SAMPLE' provider-values/scripts/smoke-test.sh
grep -Fq 'JSONTABLE(p.json_value' provider-values/scripts/smoke-test.sh

if grep -Eiq '^[[:space:]]*ddl(FilePaths)?[[:space:]]*:' "${vdb_file}"; then
  printf 'ERROR: Provider Values VDB must import its physical schema from GetSchema.\n' >&2
  exit 1
fi

if find provider-values -type f -name '*.zip' -print -quit | grep -q .; then
  printf 'ERROR: generated bundles must not be committed.\n' >&2
  exit 1
fi

printf 'Provider Values static checks passed.\n'
