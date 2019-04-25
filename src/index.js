import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Kamel"
        timeAgo="Today at 5:00PM"
        avatar={faker.image.avatar()}
        comment="Super!"
      />
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:30PM"
        avatar={faker.image.avatar()}
        comment="Merci!"
      />
      <CommentDetail
        author="John"
        timeAgo="Yesterday at 9:00PM"
        avatar={faker.image.avatar()}
        comment="Good job"
      />
      <CommentDetail
        author="Bob"
        timeAgo="Yesterday at 8:00PM"
        avatar={faker.image.avatar()}
        comment="Nul!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
