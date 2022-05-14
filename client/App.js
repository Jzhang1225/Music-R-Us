import { Container } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <Container>
      <Navbar />
      <div style={{ marginTop: 75 }}>
        <Routes />
      </div>
    </Container>
  );
};

export default App;
