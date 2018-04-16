##########
#A request using jq with multiple parameters and an array
#Let's write a curl query into the file 04_postman_api_call.sh to the URL of the API with the parameters foo which is equal to bar, a parameter program which is equal to camp2 and a parameter people which is the array with the values Frieda and Francis. Using jq write only the fields args in the file 04_postman_api_call.result.
##########
#!/bin/sh

curl -d "foo=bar" -d "program=camp2" -d "people[]=Frieda" -d "people[]=Francis" -G "https://postman-echo.com/get" | jq '.args'  > 04_postman_api_call.result
