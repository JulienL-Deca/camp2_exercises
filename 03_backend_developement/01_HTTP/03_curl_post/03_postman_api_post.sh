##########
#Let's now use cURL to make POST queries on the Postman API. The URL of the API is https://postman-echo.com/post
#A request with a JSON body
#Let's write a curl query into the file 03_postman_api_post.sh to the URL of the API and with the data foo wich is equal to bar.
#This time, these must be in JSON ({"foo": "bar"}). Using jq write only the fields json in the file 03_postman_api_post.result.
##########

#curl -d "foo[]:bar" https://postman-echo.com/post | jq '{foo: .form.foo}' > 03_postman_api_post.result

curl -H "Content-Type: application/json" -d '{"foo": "bar"}' https://postman-echo.com/post | jq '.json' > 03_postman_api_post.result
