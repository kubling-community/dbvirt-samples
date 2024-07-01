#!/bin/bash
rm -f azure-descriptor-bundle.zip; cd descriptor; zip -r ../azure-descriptor-bundle.zip *;cd ..
docker run --rm -v $(pwd)/modules/:/modules/ kubling/dbvirt-cli:latest bundle genmod /modules/delegate -o /modules/azure-module-bundle.zip
docker run --rm -v $(pwd)/modules/:/modules/ kubling/dbvirt-cli:latest bundle genmod /modules/parser -o /modules/azure-sql-fn-parser-bundle.zip
