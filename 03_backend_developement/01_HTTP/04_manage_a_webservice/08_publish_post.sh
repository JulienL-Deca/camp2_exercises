#!/bin/sh

#Let's write a script called 08_publish_post.sh user_id title body that performs a POST request to publish a blogpost on the backend.
#
#Note that you will not really add a post and then won't be able to see the result of your script after it has been run. What you will see is the return value of you call will contain the data you passed and the id of the fakely created post (namely: 101). And this will be the case for all modifying or destructing operations, look for the return value.

# $1 user_id
# $2 title
# $3 body
#JSON.stringify({
#      title: 'foo',
#      body: 'bar',
#      userId: 1
#    })

curl -H "Content-Type: application/json" -d "{\"title\": \"${2}\", \"body\": \"${3}\", \"userId\": \"${1}\"}" https://jsonplaceholder.typicode.com/posts
