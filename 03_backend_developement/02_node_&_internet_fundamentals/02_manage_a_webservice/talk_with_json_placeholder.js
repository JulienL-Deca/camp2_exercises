/*
Manage your first, real REST webservice in an NPM package
Create a file called talk_with_json_placeholder.js. In this file we will expose some functions to build the same behaviour of our blog engine using curl.

Remember, our blog is the conjunction of these data structures:

user http://jsonplaceholder.typicode.com/users
post http://jsonplaceholder.typicode.com/posts
comment http://jsonplaceholder.typicode.com/comments
Don't forget to export all your functions for the tests.
*/
const webRequest = require("request");

/*
Retrieve data
For this topic, the callback of the functions must, each time, take as an argument only the data returned by the execution of the query.

Fetch post
  fetchPosts(callback) : that fetch the list of each blogposts
  fetchPostByUser(userId, callback) : that fetch the list of each blogposts by userId
  fetchPost(id, callback) : that fetch a post by his id
Fetch users
  fetchUsers(callback) that fetch the list of each users
  fetchUser(userId, callback) that fetch an user by his id
Fetch comments
  fetchComments(callback) that fetch the list of each comments
  fetchCommentsByPost(postId, callback) that fetch the list of each comments on a specific post
*/
function fetchPosts(callback){
  webRequest.get(
    "http://jsonplaceholder.typicode.com/posts",
    function (error, response, result) {
      callback(result);
    }
  );
}
function fetchPostByUser(userId, callback){
  webRequest(
    {
      url: `http://jsonplaceholder.typicode.com/users/${userId}/posts`,
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
function fetchPost(id, callback){
  webRequest(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${id}`,
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
function fetchUsers(callback){
  webRequest(
    {
      url: `http://jsonplaceholder.typicode.com/users`,
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
function fetchUser(userId, callback){
  webRequest(
    {
      url: `http://jsonplaceholder.typicode.com/users/${userId}`,
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
function fetchComments(callback){
  webRequest(
    {
      url: `http://jsonplaceholder.typicode.com/comments`,
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
function fetchCommentsByPost(postId, callback){
  webRequest(
    {
      url: `http://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
/*
Publish Data
For this topic, the callback of the functions must, each time, take as an argument only the potential error returned by the execution of the query.

Publish a post
Let's writes a function called publishPost(userId, title, body, callback) that performs a POST request to publish a blogpost on the backend.

Publish a comments
Writes a function called publishComment(postId, name, email, body, callback) that performs a POST request to publish a comment on a particular post.
*/
function publishPost(userId, title, body, callback){
  webRequest.post(
    "http://jsonplaceholder.typicode.com/posts",
    {form: {userId: userId, title: title, body: body} },
    function (error, response, result) {
      callback(result);
    }
  );
}
/*
Publish a comments
Writes a function called publishComment(postId, name, email, body, callback) that performs a POST request to publish a comment on a particular post.
*/
//curl -H "Content-Type: application/json" -d "{\"postId\": \"${1}\", \"name\": \"${2}\", \"email\": \"${3}\", \"body\": \"${4}\"}" http://jsonplaceholder.typicode.com/comments
function publishComment(postId, name, email, body, callback){
  webRequest.post(
    "http://jsonplaceholder.typicode.com/comments",
    {form: {postId: postId, name: name, email: email, body: body} },
    function (error, response, result) {
      callback(result);
    }
  );
}

/*
updatePostTitle(postId, newTitle, callback) that updates the title of a post
updatePostBody(postId, newBody, callback) that updates the body of a post
updatePost(postId, newTitle, newBody, callback) that updates the body and the title of a post
*/
function updatePostTitle(postId, newTitle, callback) {
  webRequest.patch(
    `http://jsonplaceholder.typicode.com/posts/${postId}`,
    {form: {postId: postId, title: newTitle}},
    function(error, response, body) {
      callback(body);
    }
  );
}

function updatePostBody(postId, newBody, callback) {
  webRequest.patch(
    `http://jsonplaceholder.typicode.com/posts/${postId}`,
    {form: {body: newBody}},
    function(error, response, body) {
      callback(body);
    }
  );
}

function updatePost(postId, newTitle, newBody, callback) {
  webRequest.patch(
    `http://jsonplaceholder.typicode.com/posts/${postId}`,
    {form: {title: newTitle, body: newBody}},
    function(error, response, body) {
      callback(body);
    }
  );
}
function printSomeThing(toPrint){
  console.log(toPrint);
}
module.exports = {
  fetchPosts: fetchPosts,
  fetchPostByUser: fetchPostByUser,
  fetchPost: fetchPost,
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchComments: fetchComments,
  fetchCommentsByPost: fetchCommentsByPost,
  publishPost: publishPost,
  publishComment: publishComment,
  updatePostTitle: updatePostTitle,
  updatePostBody: updatePostBody,
  updatePost: updatePost
}
