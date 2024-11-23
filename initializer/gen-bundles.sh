#!/bin/bash
docker run --rm -v $(pwd):/base kubling/kubling-cli:latest bundle genmod /base/descriptor -o /base/initializer-descriptor-bundle.zip --parse
docker run --rm -v $(pwd)/modules:/modules kubling/kubling-cli:latest bundle genmod /modules/tokenbased -o /modules/tokenbased-module-bundle.zip --parse