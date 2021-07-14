import React, { useEffect } from "react";
import {
  Typography,
  Paper,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import { TwitterShareButton, TwitterIcon, FacebookShareButton,FacebookIcon,WhatsappShareButton,WhatsappIcon } from "react-share";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";
import { getPost, getPostBySearch } from "../../actions/posts";
import CommentSection from "./CommentSection";
import useStyles from "./styles";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  let urlshare = `http://localhost:3000/posts/${id}`
  useEffect(() => {
    dispatch(getPost(id));
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPostBySearch({ search: "none", tag: post?.tags.join(",") }));
    }
    // eslint-disable-next-line
  }, [post]);

  if (!post) {
    return null;
  }

  if (isLoading) {
    return (
      <Paper elevetion={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }
  // const handleClick = () => {

  //   <Link to ="https://twitter.com/intent/tweet?url=https%3A%2F%2Fparse.com" rel="noopener"></Link>;
  // };
  const openPost = (_id) => history.push(`/posts/${_id}`);

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography gutterBottom variant="h5">
            <strong>Share : </strong>
          </Typography>
          <TwitterShareButton 
          title={post.title}
          url = {urlshare} >
             <TwitterIcon size={32} round />
          </TwitterShareButton>
          <FacebookShareButton
          title={post.title}
          url = {urlshare}
          >
            <FacebookIcon size={32} round />
          
          </FacebookShareButton>
          {/* <Button
           style={{ marginTop: "10px" }}
           
            size="small"
            onClick={handleClick}
          >
            <TwitterIcon
              style={{ marginTop: "10px" }}
              variant="contained"
              color="primary"
              size="small"
            
              // href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fparse.com"
              // rel="noopener"
            >
              {/* <i class="fab fa-2x fa-twitter"></i> */}
          {/* </TwitterIcon> */}

          {/* </Button> */}

          <Divider style={{ margin: "20px 0" }} />
          {/* <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} /> */}
          <CommentSection post={post} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </div>
      </div>
      {!!recommendedPosts.length && (
        <div className={classes.section}>
          <Divider />
          <Typography gutterBottom variant="h5">
            <strong>You might also like:</strong>
          </Typography>

          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, message, name, selectedFile, _id, likes }) => (
                <div
                  style={{ margin: "20px", cursor: "pointer" }}
                  onClick={() => openPost(_id)}
                  key={_id}
                >
                  <Typography gutterBottom variant="h6">
                    {title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {name}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {message}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    Likes: {likes.length}
                  </Typography>

                  <img src={selectedFile} width="200px" alt="post Img" />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default PostDetails;
