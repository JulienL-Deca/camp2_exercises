##########
#A request without parameters
#Let's write a curl query into the file 01_postman_api_call.sh to the URL of the API and write the result of the API-call into the file 01_postman_api_call.result.
##########
#!/bin/sh
curl -o 01_postman_api_call.result https://postman-echo.com/get
