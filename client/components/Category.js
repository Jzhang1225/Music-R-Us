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

export const Category = ({ instruments, brands, category }) => {
  const instrumentsList =
    instruments.filter((instrument) => instrument.categoryId === category.id) ||
    {};
  return (
    <Container>
      <h1>{`List of ${category.name}'s in our Store`}</h1>

      <Grid container spacing={4}>
        {instrumentsList.map((instrument) => {
          const brand = brands.find((brand) => brand.id === instrument.brandId);
          return (
            <Grid item xs={12} sm={6} md={4} key={instrument.id}>
              <Card sx={{ width: 250, minWidth: 250, height: 400 }}>
                <Link to={`/instruments/${instrument.id}`}>
                  <CardMedia
                    component="img"
                    image={`/public/photos/${instrument.image}`}
                    height="250"
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
  const category =
    categories.find(
      (category) => category.id === otherProps.match.params.id * 1
    ) || {};
  return { instruments, brands, category };
};

export default connect(mapState)(Category);
