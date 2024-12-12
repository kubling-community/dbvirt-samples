#!/bin/bash
docker run --rm -v $(pwd):/base kubling/kubling-cli:latest bundle genmod base/descriptor -o base/descriptor.zip --parse