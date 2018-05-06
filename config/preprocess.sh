#!/bin/bash

if [[ "$1" != "dev" && "$1" != "prod" ]];then
  echo "Error: preprocess unknown mode"
else
  if [[ "$1" == "dev" ]]; then
    mode="build"
  elif [[ "$1" == "prod" ]]; then
    mode="dist"
  fi
  # ensure dir exists.
  mkdir -p $mode
  rm -rf $mode/*
  cp src/manifest.json $mode

  # add content_security_policy to manifest.json in dev mode.
  if [[ $mode == "build" ]]; then
    sed -i '' '$s/}/  ,"content_security_policy": "script-src '\''self'\'' '\''unsafe-eval'\''; object-src '\''self'\''"}/' build/manifest.json
  fi

  mkdir -p $mode/icons/
  cp src/icons/* $mode/icons/
  echo "Preprocess is done"
fi