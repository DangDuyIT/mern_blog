import React from "react";
import { Container, Fab } from "@material-ui/core";
import Header from "../components/Header";
import PostList from "../components/PostList";
import makeStyles from "./styles";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
import CreatePostModal from "../components/CreatePostModal";

export default function HomePage() {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        color="primary"
        className={classes.fab}
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
/* 
Header - các mục bài
Giới Thiệu bản thân <- bên trái trên 
phải danh sách các bài mới
Post list hiển thị dang card 3x4 
*/
