#!/bin/sh

#Well well, now we have to delete some Data
#Imagine that a few years ago, I wrote a blog post that said "Why Donald Trump will never be president of the US", or that someone would not have been very courteous in the comments ... I might want to delete them! Let's attack the verb DELETE!

# 14_delete_comment.sh comment_id that deletes comments referenced by its id

# $1 comment_id

curl -v -X DELETE https://jsonplaceholder.typicode.com/posts/$1
