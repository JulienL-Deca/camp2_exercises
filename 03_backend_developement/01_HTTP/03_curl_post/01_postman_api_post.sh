##########
#Let's now use cURL to make POST queries on the Postman API. The URL of the API is https://postman-echo.com/post
#A request without parameters
#Let's write a curl query into the file 01_postman_api_post.sh to the URL of the API and with the data Hello from postman. Using jq write only the fields form in the file 01_postman_api_post.result.
##########
#!/bin/sh

curl -d "Hello from postman" https://postman-echo.com/post | jq '.form' > 01_postman_api_post.result
