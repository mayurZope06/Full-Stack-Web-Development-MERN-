import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@mz",
      remarks: "great job!",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
    console.log("added new comment");
  };

  return (
    <div>
      <h3>All Comments</h3>
      {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
          <span>
            <i>{comment.remarks}</i>
          </span>
          &nbsp;
          <span>(rating = {comment.rating})</span>
          <p>- {comment.username}</p>
        </div>
      ))}

      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </div>
  );
}
