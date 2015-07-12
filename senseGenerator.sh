#!/bin/bash

ruby senseBulkConverter.rb $1 $2 > $1_$2.txt
cat "$1_$2.txt" | xclip -sel clip
