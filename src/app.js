/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "rabbit"];
  var ext = [".com", ".net", ".us", ".io", ".cl"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let h = 0; h < noun.length; h++) {
        for (let e = 0; e < ext.length; e++) {
          console.log(pronoun[i] + adj[j] + noun[h] + ext[e]);
        }
      }
    }
  }
};
