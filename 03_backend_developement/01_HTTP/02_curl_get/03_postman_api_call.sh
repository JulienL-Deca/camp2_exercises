##########
#A request using jq with multiple parameters
#Let's write a curl query into the file 03_postman_api_call.sh to the URL of the API with the parameters foo which is equal to bar and a parameter program which is equal to camp2. Using jq write only the fields args in the file 03_postman_api_call.result.
##########
#!/bin/sh
curl -d 'foo=bar' -d "program=camp2" -G "https://postman-echo.com/get" | jq '.args' > 03_postman_api_call.result
