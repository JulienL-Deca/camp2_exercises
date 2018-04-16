#!/bin/sh
#Publish a comment (POST)
#Writes a script called 09_publish_comment.sh post_id name email body that performs a POST request to publish a comment on a particular post.

# $1 post_id
# $2 name
# $3 email
# $4 body

curl -H "Content-Type: application/json" -d "{\"postId\": \"${1}\", \"name\": \"${2}\", \"email\": \"${3}\", \"body\": \"${4}\"}" http://jsonplaceholder.typicode.com/comments
