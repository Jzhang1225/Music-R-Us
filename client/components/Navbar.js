import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout, resetOrders, resetLineitem } from "../store";
import Settings from "./Settings";
import { Login, Signup } from "./AuthForm";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      login: true,
      signup: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { handleClick, isLoggedIn, isBanned } = this.props;
    const { handleOpen, handleClose } = this;
    const { open, login, signup } = this.state;

    return (
      <Container>
        {isBanned ? null : (
          <AppBar position="fixed" sx={{ bgcolor: "#0000CD" }}>
            <Container maxWidth="xl">
              {isLoggedIn ? (
                <Toolbar
                  disableGutters
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Link to="/home">
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{
                        color: "#FFFFFF",
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                      }}
                    >
                      Music R Us
                      <MusicNoteIcon />
                    </Typography>
                  </Link>
                  <MenuItem>
                    <Link to="/instruments">
                      <Typography textAlign="center" sx={{ color: "#FFFFFF" }}>
                        Instruments
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/brands">
                      <Typography textAlign="center" sx={{ color: "#FFFFFF" }}>
                        Shop By Brands
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/categories">
                      <Typography textAlign="center" sx={{ color: "#FFFFFF" }}>
                        Shop By Categories
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/cart">
                      <Typography textAlign="center" sx={{ color: "#FFFFFF" }}>
                        Cart
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <a href="#">
                      <Typography textAlign="center">
                        <Settings />
                      </Typography>
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" onClick={handleClick}>
                      <Typography textAlign="center" sx={{ color: "#FFFFFF" }}>
                        Logout
                      </Typography>
                    </a>
                  </MenuItem>
                </Toolbar>
              ) : (
                <Toolbar
                  disableGutters
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Link to="/home">
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{
                        color: "#FFFFFF",
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                      }}
                    >
                      Music R Us
                      <MusicNoteIcon />
                    </Typography>
                  </Link>
                  <MenuItem>
                    <Button
                      style={{
                        color: "#FFFFFF",
                        fontSize: "16px",
                        fontFamily: "Roboto, helvetica, Arial, sans-serif",
                        textTransform: "none",
                      }}
                      onClick={handleOpen}
                    >
                      Login/Signup
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          <Button
                            onClick={() =>
                              this.setState({ login: true, signup: false })
                            }
                          >
                            Login
                          </Button>
                          <Button
                            onClick={() =>
                              this.setState({ login: false, signup: true })
                            }
                          >
                            Signup
                          </Button>
                          {login && <Login />}
                          {signup && <Signup />}
                        </Typography>
                      </Box>
                    </Modal>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/instruments">
                      <Typography textAlign="center" sx={{ color: "#FFFFFF" }}>
                        Instruments
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/brands">
                      <Typography textAlign="center" sx={{ color: "#FFFFFF" }}>
                        Shop By Brands
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/categories">
                      <Typography textAlign="center" sx={{ color: "#FFFFFF" }}>
                        Shop By Categories
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/cart">
                      <Typography textAlign="center" sx={{ color: "#FFFFFF" }}>
                        Cart
                      </Typography>
                    </Link>
                  </MenuItem>
                </Toolbar>
              )}
            </Container>
          </AppBar>
        )}
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isBanned: state.auth.isBanned,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
      dispatch(resetOrders());
      dispatch(resetLineitem());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
