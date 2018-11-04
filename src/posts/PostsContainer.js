import React, { Component } from 'react';
import store from '../stores/store';
import { observer } from "mobx-react";
import { CircularProgress } from "@material-ui/core";

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

      </div>
    )
  }
}

PostsContainer = observer(PostsContainer);
export default PostsContainer;
