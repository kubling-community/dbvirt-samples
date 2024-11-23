#!/bin/bash
docker run --rm -v $(pwd):/base kubling/kubling-cli:latest bundle genmod /base/descriptor -o /base/azure-descriptor-bundle.zip --parse
docker run --rm -v $(pwd)/modules/:/modules/ kubling/kubling-cli:latest bundle genmod /modules/delegate -o /modules/azure-module-bundle.zip
docker run --rm -v $(pwd)/modules/:/modules/ kubling/kubling-cli:latest bundle genmod /modules/parser -o /modules/azure-sql-fn-parser-bundle.zip
