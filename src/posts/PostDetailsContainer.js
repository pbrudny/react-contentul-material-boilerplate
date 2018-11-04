import React, { Component, Fragment } from 'react';
import store from '../stores/store';
import { observer } from "mobx-react";

import { CircularProgress } from "@material-ui/core";

class PostDetailsContainer extends Component {
  componentDidMount() {
    store.getPost(this.props.match.params.number);
  }

  render() {
    if (!store.currentPost.fields) {
      return (
        <CircularProgress />
      )
    }

    return <Fragment>
    </Fragment>
  }
}

PostDetailsContainer = observer(PostDetailsContainer);
export default PostDetailsContainer;
