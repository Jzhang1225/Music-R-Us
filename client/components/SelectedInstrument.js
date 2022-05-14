import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const SelectedInstrument = ({ instrument, brand, category }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Container>
      <Card aligncontent="space-around" sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          image={`/public/photos/${instrument.image}`}
          height="225"
        />
        <CardContent>
          <Typography>
            {"Instrument Name:"} {instrument.name}
            <br></br>
            {"Brand:"} <Link to={`/brands/${brand?.id}`}>{brand?.name}</Link>
            <br></br>
            {"Price:"} {`$ ${instrument.price} `}
          </Typography>
          <AddToCart instrument={instrument} />
          <br></br>
          {`Return to`}{" "}
          <Link to={`/categories/${category.id}`}> {category.name}'s</Link>
        </CardContent>
        <CardActions>
          <Typography>Details:</Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description:</Typography>
            <Typography paragraph></Typography>
            {instrument.description}
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
};

const mapState = ({ instruments, brands, categories }, otherProps) => {
  const instrument =
    instruments.find(
      (instrument) => instrument.id === otherProps.match.params.id * 1
    ) || {};
  const category =
    categories.find((category) => category.id === instrument.categoryId) || {};
  const brand = brands.find((brand) => brand.id === instrument.brandId) || {};
  return { instrument, brand, category };
};

export default connect(mapState)(SelectedInstrument);
