import { Box, CardMedia, Paper } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */

export const Home = (props) => {
  const { username } = props;

  let welcome;

  if (username) {
    welcome = `Welcome ${username}`;
  } else {
    welcome = `Welcome to Music R Us`;
  }

  return (
    <Box sx={{ height: "100vh", width: "1000px" }}>
      <h3>{welcome}</h3>
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
  };
};

export default connect(mapState)(Home);
