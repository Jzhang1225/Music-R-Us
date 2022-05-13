import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { connect } from "react-redux";
import Pagination from "@mui/material/Pagination";
import UpdateInstrumentRow from "./UpdateInstrumentRow";

class UpdateInstruments extends React.Component {
  constructor() {
    super();
    this.state = {
      sortValue: "",
      filterValue: "",
      currentPage: 1,
      instrumentsPerPage: 10,
    };
  }

  SortChange = (ev) => {
    this.setState({
      sortValue: ev.target.value,
    });
  };

  FilterChange = (ev) => {
    this.setState({
      filterValue: ev.target.value,
    });
  };

  SortInstruments = (sortValue, instruments) => {
    if (sortValue === "name_asc") {
      instruments.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortValue === "name_des") {
      instruments.sort((a, b) => b.name.localeCompare(a.name));
    }
    if (sortValue === "price_asc") {
      instruments.sort((a, b) => a.price - b.price);
    }
    if (sortValue === "price_des") {
      instruments.sort((a, b) => b.price - a.price);
    }
    return instruments;
  };

  FilterInstruments = (filterValue, instruments) => {
    return instruments.filter((instrument) =>
      instrument.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  render() {
    const { sortValue, filterValue, currentPage, instrumentsPerPage } =
      this.state;
    const { SortChange, FilterChange, SortInstruments, FilterInstruments } =
      this;

    let instruments = SortInstruments(sortValue, this.props.instruments);
    instruments = FilterInstruments(filterValue, instruments);

    const indexOfLastInstrument = currentPage * instrumentsPerPage;
    const indexOfFirstInstrument = indexOfLastInstrument - instrumentsPerPage;
    const currentinstruments = instruments.slice(
      indexOfFirstInstrument,
      indexOfLastInstrument
    );

    return (
      <>
        <select name="sort" value={sortValue} onChange={SortChange}>
          <option value="">Sort instruments</option>
          <option value="name_asc"> Name ↑</option>
          <option value="name_des"> Name ↓</option>
          <option value="price_asc"> Price ↑</option>
          <option value="price_des"> Price ↓</option>
        </select>
        <input
          placeholder="Search instrument"
          value={filterValue}
          name="Search by instrument name"
          onChange={FilterChange}
        />
        {!instruments.length ? (
          <h2>No instruments for that search</h2>
        ) : (
          <>
            <Pagination
              count={Math.ceil(instruments.length / instrumentsPerPage)}
              color="primary"
              onChange={(ev, page) => this.setState({ currentPage: page })}
            />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Instrument Name</TableCell>
                    <TableCell align="right">Instrument Price</TableCell>
                    <TableCell align="right">Instrument Inventory</TableCell>
                    <TableCell align="right">Update Instrument</TableCell>
                    <TableCell align="right">Remove Instrument</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentinstruments.map((instrument) => (
                    <UpdateInstrumentRow
                      key={instrument.id}
                      instrument={instrument}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </>
    );
  }
}

const mapState = ({ instruments }) => {
  return {
    instruments,
  };
};

export default connect(mapState)(UpdateInstruments);
