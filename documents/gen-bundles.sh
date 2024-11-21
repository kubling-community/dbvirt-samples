#!/bin/bash
docker run --rm -v $(pwd):/base kubling/dbvirt-cli:latest bundle genmod /base/descriptor -o /base/documents-descriptor-bundle.zip --parse
docker run --rm -v $(pwd)/modules:/modules kubling/dbvirt-cli:latest bundle genmod /modules/doc -o /modules/documents-module-bundle.zip --parse