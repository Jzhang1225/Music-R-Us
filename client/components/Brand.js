import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddToCart from "./AddToCart";
import { CardActions } from "@mui/material";

export const Brand = ({ instruments, brand, categories }) => {
  const instrumentsList = instruments.filter(
    (instrument) => instrument.brandId === brand.id
  );
  if (!brand) return null;
  return (
    <Container>
      <h1>{brand.name} Instruments</h1>
      <Grid container spacing={4}>
        {instrumentsList.map((instrument) => {
          return (
            <Grid
              key={instrument.id}
              item
              container
              justifyContent="space-around"
              aligncontent="center"
              xs={12}
              sm={6}
              md={4}
            >
              <Card
                key={instrument.id}
                sx={{ width: 250, minWidth: 250, height: 400 }}
                aligncontent="space-around"
              >
                <Link to={`/instruments/${instrument.id}`}>
                  <CardMedia
                    component="img"
                    image={`/public/photos/${instrument.image}`}
                    height="225"
                  />
                </Link>
                <CardContent>
                  <Typography>
                    {"Instrument Name:"}{" "}
                    <Link to={`/instruments/${instrument.id}`}>
                      {instrument.name}
                    </Link>
                    <br></br>
                    {"Brand:"}{" "}
                    <Link to={`/brands/${brand.id}`}>{brand.name}</Link>
                  </Typography>
                  <CardActions>
                    <AddToCart instrument={instrument} />
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

const mapState = ({ instruments, brands, categories }, otherProps) => {
  const brand =
    brands.find((brand) => brand.id === otherProps.match.params.id * 1) || {};
  return { instruments, brand, categories };
};
//MUI 5 updates
export default connect(mapState)(Brand);
