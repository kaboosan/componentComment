import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Kamel"
          timeAgo="Today at 5:00PM"
          avatar={faker.image.avatar()}
          comment="Super!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:30PM"
          avatar={faker.image.avatar()}
          comment="Merci!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="John"
          timeAgo="Yesterday at 9:00PM"
          avatar={faker.image.avatar()}
          comment="Good job"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Bob"
          timeAgo="Yesterday at 8:00PM"
          avatar={faker.image.avatar()}
          comment="Nul!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
