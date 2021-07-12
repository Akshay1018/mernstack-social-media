import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { postComment } from "../../actions/posts";
import useStyles from "./styles.js";

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("token"));
  const classes = useStyles();
  const [comments, SetComments] = useState(post?.comments);
  const [comment, SetComment] = useState("");
  const dispatch = useDispatch();
  const commentsRef = useRef();

  const onclick = async () => {
    const finalComment = `${user.result.name} : ${comment}`;
    const newComment = await dispatch(postComment(finalComment, post._id));
    SetComments(newComment);
    SetComment("");

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography variant="h6" gutterBottom>
            <strong>Comments</strong>
          </Typography>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong> {c.split(": ")[0]}</strong>
              {c.split(':')[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
        {user?.result?.name && (
          <div style={{ width: "70%" }}>
            <Typography gutterBottom variant="h6">
              Write a comment
            </Typography>
            <TextField
              fullWidth
              rows={4}
              variant="outlined"
              label="Write here..."
              multiline
              value={comment}
              onChange={(e) => SetComment(e.target.value)}
            />
            <Button
              style={{ marginTop: "10px" }}
              fullWidth
              disabled={!comment}
              variant="contained"
              color="primary"
              onClick={onclick}
            >
              Comment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CommentSection;
