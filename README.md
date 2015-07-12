Some useful files for creating test data for Kibana using the marvel plugin.

Steps:

1. Generate Data
2. Paste into Sense

Generate Data
=============
Using http://beta.json-generator.com/ to generate JSON that can be used in Marvel. The site has a good example, and consultationsGenerator.js has an example file I used.

Upload Data to Elasticsearch
============================
To simplify the cURL commands, this uses Sense from the Marvel plugin.

1. Use the generator website to generate data.
2. Copy the data into 'sampledata'
3. $ ./senseGenerator.sh INDEX_NAME TYPE_NAME

    * INDEX_NAME can be whatever you want but usually matches the object you are creating.
    * TYPE_NAME is usually just for debugging like 'test1'

4. This will have copied all the curl command to your clipboard. Simply paste into the Sense window and run. It will have also created a file INDEX_NAME_TYPE_NAME.txt You'll want to purge those after a lot of testing.

Marvel
======
To insall marvel on linux:

/usr/share/elasticsearch/bin/plugin -i elasticsearch/marvel/latest