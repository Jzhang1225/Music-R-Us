import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export const Brands = ({ brands }) => {
  return (
    <Container>
      <Grid container spacing={4}>
        {brands.map((brand) => {
          return (
            <Grid
              key={brand.id}
              item
              container
              justifyContent="space-around"
              alignContent="center"
              xs={12}
              sm={6}
              md={4}
            >
              <Card
                sx={{ width: 300, height: 350 }}
                aligncontent="space-around"
              >
                <Link to={`/brands/${brand.id}`}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={`/public/photos/default/${brand.image}`}
                      height="300"
                    />
                    <CardContent>
                      <Typography>{brand.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

const mapState = (state) => state;

export default connect(mapState)(Brands);
