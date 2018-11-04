import React from 'react';
import { Paper } from '@material-ui/core';
import Grid from "@material-ui/core/Grid/Grid";
import { SentimentDissatisfied } from "@material-ui/icons";

const NotFound = () => {
  return (
    <Grid container>
      <Grid item sm={10}>
        <Paper style={{padding: 20, margin: 30}}>
          <h1>
            Not found <SentimentDissatisfied />
          </h1>
        </Paper>
      </Grid>
    </Grid>
  )
};

export default NotFound;
