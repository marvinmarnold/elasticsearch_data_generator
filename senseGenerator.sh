#!/bin/bash

ruby senseBulkConverter.rb $1 $2 > test$1.txt
cat "test$1_$2.txt" | xclip -sel clip
