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
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { Pagination } from "@mui/material";

class Instruments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 7,
    };
  }

  render() {
    const { instruments, brands, categories, history, match } = this.props;

    const { currentPage, itemsPerPage } = this.state;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentInstruments = instruments.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

    return (
      <Container>
        <Grid container justifyContent="flex-end">
          <Box sx={{ p: 1 }}>
            <FormControl>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Sort By
              </InputLabel>
              <NativeSelect
                defaultValue={match.params.sort}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
                onChange={(ev) =>
                  history.push(
                    ev.target.value
                      ? `/instruments/sort/${ev.target.value}`
                      : "/instruments/sort/noFilter"
                  )
                }
              >
                <option value=""> Sort By </option>
                <option value="AscName">Sort Ascending By Name</option>
                <option value="DescName">Sort Decending By Name</option>
                <option value="AscPrice">Sort Ascending By Price</option>
                <option value="DescPrice">Sort Descending By Price</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </Grid>
        <Grid container spacing={4}>
          {currentInstruments.map((instrument) => {
            const brand = brands.find(
              (brand) => brand.id === instrument.brandId
            );
            const category =
              categories.find(
                (category) => category.id === instrument.categoryId
              ) || {};
            return (
              <Grid
                key={instrument.id}
                item
                container
                justifycontent="space-around"
                aligncontent="center"
                xs={12}
                sm={6}
                md={4}
              >
                <Card
                  sx={{ width: 250, height: 350 }}
                  aligncontent="space-around"
                >
                  <CardActionArea>
                    <Link to={`/instruments/${instrument.id}`}>
                      <CardMedia
                        component="img"
                        image={`/public/photos/${instrument.image}`}
                        height="225"
                      />
                    </Link>
                  </CardActionArea>
                  <CardContent>
                    <Typography>
                      {"Instrument Name:"}{" "}
                      <Link to={`/instruments/${instrument.id}`}>
                        {instrument.name}
                      </Link>
                      <br></br>
                      {"Brand:"}{" "}
                      <Link to={`/brands/${brand?.id}`}>{brand?.name}</Link>
                      <br></br>
                      {" Category:"}
                      {category.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Pagination
          style={{ display: "flex", justifyContent: "center" }}
          count={Math.ceil(instruments.length / itemsPerPage)}
          color="primary"
          onChange={(ev, page) =>
            this.setState({
              currentPage: page,
              instruments: currentInstruments,
            })
          }
        />
      </Container>
    );
  }
}
const mapState = (state, history) => {
  const sort = history.match.params.sort;

  if (sort === "AscName") {
    state.instruments.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sort === "DescName") {
    state.instruments.sort((a, b) => b.name.localeCompare(a.name));
  }
  if (sort === "AscPrice") {
    state.instruments.sort((a, b) => a.price - b.price);
  }
  if (sort === "DescPrice") {
    state.instruments.sort((a, b) => b.price - a.price);
  }

  return {
    brands: state.brands,
    categories: state.categories,
    instruments: state.instruments,
  };
};
export default connect(mapState)(Instruments);
