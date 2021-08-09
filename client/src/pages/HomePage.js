import React from 'react';
import { Container, Fab } from '@material-ui/core';
import Header from '../components/Header';
import PostList from '../components/PostList';


export default function HomePage() {


  return (
    <Container maxWidth='lg'>
      <Header />
      <PostList />

    </Container>
  );
}