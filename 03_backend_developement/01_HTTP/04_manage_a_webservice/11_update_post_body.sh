#!/bin/sh

#Update Data
#Yo yo yo, we can fetch, publish values, our application begins to become consistent! No one is safe from error, sometimes it is necessary to make erratas! Lets enrich our collections of tools to modify our data, using the verb PUT!

#11_update_post_body.sh post_id new_body that updates the body of a post

# $1 post_id
# $2 new_body

curl -X PUT -H "Content-Type: application/json" -d "{\"postId\": \"${1}\", \"body\": \"${2}\"}" https://jsonplaceholder.typicode.com/posts/$1
