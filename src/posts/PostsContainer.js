import React, { Component } from 'react';
import store from '../stores/store';
import { observer } from "mobx-react";
import { CircularProgress } from "@material-ui/core";
import Posts from "./Posts";

class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  state = {
    open: false,
  };

  componentDidMount() {
    store.getPosts();
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleEditClick = () => {
    console.log('EDIT CLICK');
    this.setState({
      open: true,
    });
  };

  render() {
    if (!store.posts) {
      return (
        <CircularProgress />
      )
    }

    return (
      <div>
        <Posts
          posts={store.posts}
          handleEditClick={this.handleEditClick}
          handleClose={this.handleClose}
          open={this.state.open}
        />
      </div>
    )
  }
}

PostsContainer = observer(PostsContainer);
export default PostsContainer;
