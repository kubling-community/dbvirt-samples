#!/bin/bash
docker run --rm -v $(pwd):/base kubling/kubling-cli:latest bundle genmod /base/descriptor -o /base/appmodel-descriptor-bundle.zip --parse
docker run --rm -v $(pwd)/modules/:/modules/ kubling/kubling-cli:latest bundle genmod /modules/appmodel -o /modules/appmodel-module-bundle.zip
docker run --rm -v $(pwd)/modules/:/modules/ kubling/kubling-cli:latest bundle genmod /modules/functions -o /modules/appmodel-functions-bundle.zip
