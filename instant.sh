#!/bin/bash

COMMAND=$1
TARGET=$2

if ! [[ "$TARGET" =~ ^(docker|kubernetes|k8s)$ ]]; then
    TARGET=docker
    echo "Defaulting to docker as a target, target either not specified or invalid"
fi

if [ "$TARGET" == "docker" ]; then
    if [ "$COMMAND" == "up" ]; then
        ./core/docker/compose.sh up
        ./healthworkforce/docker/compose.sh up
    elif [ "$COMMAND" == "down" ]; then
        ./core/docker/compose.sh down
        ./healthworkforce/docker/compose.sh down
    elif [ "$COMMAND" == "destroy" ]; then
        ./core/docker/compose.sh destroy
        ./healthworkforce/docker/compose.sh destroy
    elif [ "$COMMAND" == "test" ]; then
        ./core/test.sh localhost:5000
        ./healthworkforce/test.sh localhost:5000
    else
        echo "Valid options are: up, down, test or destroy"
    fi
fi


if [ "$TARGET" == "kubernetes" ] || [ "$TARGET" == "k8s" ]; then
    if [ "$COMMAND" == "up" ]; then
        ./core/kubernetes/main/k8s.sh up
        ./core/kubernetes/importer/k8s.sh up
        ./healthworkforce/kubernetes/main/k8s.sh up
        ./healthworkforce/kubernetes/importer/k8s.sh up
    elif [ "$COMMAND" == "down" ]; then
        ./core/kubernetes/main/k8s.sh down
        ./healthworkforce/kubernetes/main/k8s.sh down
    elif [ "$COMMAND" == "destroy" ]; then
        ./core/kubernetes/main/k8s.sh destroy
        ./core/kubernetes/importer/k8s.sh clean
        ./healthworkforce/kubernetes/main/k8s.sh destroy
        ./healthworkforce/kubernetes/importer/k8s.sh clean
    elif [ "$COMMAND" == "test" ]; then
        ./core/test.sh openhim-core.ssl.instant
        ./healthworkforce/test.sh openhim-core.ssl.instant
    else
        echo "Valid options are: up, down, test or destroy"
    fi
fi
