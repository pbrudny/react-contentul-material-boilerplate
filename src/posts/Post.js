import React from 'react';
import { Paper } from '@material-ui/core';
import Grid from "@material-ui/core/Grid/Grid";

const Post = (props) => {
  return (
    <Grid container justify = "center">
      <Grid item sm={3}>
        <Paper style={{padding: 20, margin: 30}}>
          <h1>{props.post.fields.title}</h1>
          <p>{props.post.fields.body}</p>
        </Paper>
      </Grid>
    </Grid>
  )
};

export default Post;
