import React, { Component } from "react";
import { connect } from "react-redux";
import { Pagination } from "@mui/material";

const pageSize = 6;

class AppPagination extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 10,
      instruments: [],
    };
  }
  render() {
    const { currentPage, itemsPerPage } = this.state;
    const { instruments } = this.props;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentInstruments = instruments.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
    return (
      <div
        className="pagination"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Pagination
          count={Math.ceil(instruments.length / itemsPerPage)}
          color="primary"
          onChange={(ev, page) =>
            this.setState({
              currentPage: page,
              instruments: currentInstruments,
            })
          }
        />
      </div>
    );
  }
}

const mapState = ({ instruments }) => {
  return { instruments };
};
export default connect(mapState)(AppPagination);
