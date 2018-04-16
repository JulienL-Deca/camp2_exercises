##########
#Let's now use cURL to make POST queries on the Postman API. The URL of the API is https://postman-echo.com/post
#A request with a body
#Let's write a curl query into the file 02_postman_api_post.sh to the URL of the API and with the data foo wich is equal to bar. Using jq write only the fields form in the file 02_postman_api_post.result. Don't reach into JSON yet.
##########
#!/bin/sh

curl -d "foo=bar" https://postman-echo.com/post | jq .'form' > 02_postman_api_post.result
