##########
#A request using jq with one parameter
#Let's write a curl query into the file 02_postman_api_call.sh to the URL of the API with one parameter foo and with the value bar. Using jq write only the fields args in the file 02_postman_api_call.result.
##########
#!/bin/sh
curl "https://postman-echo.com/get?foo=bar" | jq '.["args"]' > 02_postman_api_call.result
