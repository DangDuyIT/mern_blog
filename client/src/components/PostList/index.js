import React from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { makeStyles } from "@material-ui/core/styles";
import Post from "./Post";
import { postsState$ } from "../../redux/selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);
  React.useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={6} sm={3}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
