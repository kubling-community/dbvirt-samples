#!/bin/bash
docker run --rm -v $(pwd):/base kubling/kubling-cli:latest bundle genmod /base/descriptor -o /base/documents-descriptor-bundle.zip --parse
docker run --rm -v $(pwd)/modules:/modules kubling/kubling-cli:latest bundle genmod /modules/doc -o /modules/documents-module-bundle.zip --parse