// Article.js
import React from "react";

function Article(props) {
  console.log(props);
  return (
    <h1>Article {props.match.params.articleId}, written by {props.author.firstname}</h1>
  )
}

export default Article;
