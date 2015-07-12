Some useful files for creating test data for Kibana using the marvel plugin.

===Generate Data===
Using http://beta.json-generator.com/ to generate JSON that can be used in Marvel. The site has a good example, and consultationsGenerator.js has an example file I used.

===Upload Data to Elasticsearch===
To simplify the cURL commands, this uses Sense from the Marvel plugin.

1) Use the generator website to generate data.
2) Copy the data into 'sampledata'
3) ./senseGenerator.sh INDEX_NAME TYPE_NAME
INDEX_NAME is usually matches the json file, like 'consultations'.
TYPE_NAME is usually just for debugging like 'test1'
4) This will have copied all the curl command to your clipboard. Simply paste into the Sense window and run.

===Marvel===
To insall marvel on linux:

/usr/share/elasticsearch/bin/plugin -i elasticsearch/marvel/latest