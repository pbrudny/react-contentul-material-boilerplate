import React, { Component } from 'react';
import store from '../stores/store';
import { observer } from "mobx-react";
import { CircularProgress } from "@material-ui/core";
import Posts from "./Posts";

class PostsContainer extends Component {
  componentDidMount() {
    store.getPosts();
  }

  render() {
    if (!store.posts) {
      return (
        <CircularProgress />
      )
    }

    return (
      <div>
        <Posts posts={store.posts}/>
      </div>
    )
  }
}

PostsContainer = observer(PostsContainer);
export default PostsContainer;
