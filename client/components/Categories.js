import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import useSound from "use-sound";

export const Categories = ({ categories }) => {
  const soundUrl = "/public/sounds/guitar.mp3";

  const [play] = useSound(soundUrl, { volume: 0.35 });
  return (
    <Container>
      <Grid container spacing={4}>
        {categories.map((category) => {
          return (
            <Grid
              key={category.id}
              item
              container
              justifyContent="space-around"
              aligncontent="center"
              xs={12}
              sm={6}
              md={4}
            >
              <Card
                sx={{ maxWidth: 300, height: 350 }}
                aligncontent="space-around"
              >
                <Link key={category.id} to={`/categories/${category.id}`}>
                  <CardActionArea onClick={play}>
                    <CardMedia
                      component="img"
                      image={`/public/photos/default/${category.image}`}
                      height="300"
                    />
                    <CardContent>{category.name}</CardContent>
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

export default connect(mapState)(Categories);
