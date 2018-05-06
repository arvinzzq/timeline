#!/bin/bash

if [[ "$1" != "dev" && "$1" != "prod" ]];then
  echo "Error: preprocess unknown mode"
else
  if [[ "$1" == "dev" ]]; then
    mode="build"
  elif [[ "$1" == "prod" ]]; then
    mode="dist"
  fi
  rm -rf $mode/*
  cp src/manifest.json $mode
  mkdir -p $mode/icons/
  cp src/icons/* $mode/icons/
  echo "Preprocess is done"
fi