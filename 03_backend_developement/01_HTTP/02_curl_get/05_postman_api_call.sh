##########
#Validating a timestamp
#Let's write a curl query into the file 05_postman_api_call.sh using this URL https://postman-echo.com/time/valid with a parameter timestamp wich is equal to the current date with the format YYYY-mm-dd, you have to use the unix command date and the result will be prompted in 05_postman_api_call.result.
##########
#!/bin/bash
NEWDATE=`date "+%Y-%m-%d"`

curl "https://postman-echo.com/time/valid?timestamp=$NEWDATE" > 05_postman_api_call.result
