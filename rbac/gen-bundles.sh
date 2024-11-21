#!/bin/bash
docker run --rm -v $(pwd):/base kubling/dbvirt-cli:latest bundle genmod /base/descriptor -o /base/rbac-descriptor-bundle.zip --parse