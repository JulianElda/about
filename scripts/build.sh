#!/bin/sh

IN_DIR=src
OUT_DIR=public

rm -rf $OUT_DIR/*
mkdir $OUT_DIR/assets

cp $IN_DIR/assets/alegreya.woff2 $IN_DIR/assets/main.css $IN_DIR/assets/tailwind.css $OUT_DIR/assets
cp $IN_DIR/*.html $OUT_DIR
