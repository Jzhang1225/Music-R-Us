import { Box, Grid, CardMedia, Paper } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

export const Home = (props) => {
  const { username, isBanned } = props;

  let welcome;

  if (isBanned) {
    welcome = `Welcome ${username}, your Account is banned! Shame! Shame! Shame!`;
  } else {
    if (username) {
      welcome = `Welcome ${username}`;
    } else {
      welcome = `Welcome to Music R Us`;
    }
  }

  return (
    <Box sx={{ height: "100vh", width: "1000px" }}>
      <Grid container justifyContent="center">
        {" "}
        <h2>{welcome}</h2>{" "}
      </Grid>
      <Paper elevation={0}>
        <CardMedia component="img" image={`/public/photos/default/Home.jpeg`} />
      </Paper>
    </Box>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    isBanned: state.auth.isBanned,
  };
};

export default connect(mapState)(Home);
