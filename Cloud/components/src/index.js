import React from "react";
import ReactDOM from "react-dom";
import CommentsDetail from "./CommentsDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure oy want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentsDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Really bad!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentsDetail
          author="Alex"
          timeAgo="Today at 2:00PM"
          content="wow!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentsDetail
          author="Jane"
          timeAgo="Yesterday at 5:00 PM"
          content="Nice blog!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
