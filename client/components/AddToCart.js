import React from "react";
import { connect } from "react-redux";
import { createLineItem, updateLineitem, updateInstrument } from "../store";

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      stockMessage: "",
    };
  }

  render() {
    const { quantity, stockMessage } = this.state;
    const {
      createLineItem,
      instrument,
      lineitems,
      orderId,
      updateLineitem,
      updateInventory,
    } = this.props;

    const item = {
      quantity: quantity * 1,
      orderId: orderId ? orderId : null,
      instrumentId: instrument.id,
    };

    const updatedInstrument = {
      ...instrument,
      inventory: instrument.inventory - quantity * 1,
    };

    let lineitem;
    if (orderId) {
      lineitem = lineitems.find(
        (lineitem) =>
          lineitem.orderId === orderId &&
          lineitem.instrumentId === instrument.id
      );
    } else {
      lineitem = lineitems.find(
        (lineitem) => lineitem.instrumentId === instrument.id
      );
    }

    const Change = (ev) => {
      this.setState({
        [ev.target.name]: ev.target.value,
      });
    };
    const Submit = (ev) => {
      ev.preventDefault();

      if (quantity > instrument.inventory) {
        this.setState({
          stockMessage: `There are less than ${quantity} ${instrument.name} left in stock`,
        });
        setTimeout(() => {
          this.setState({ stockMessage: "" });
        }, 3000);
      } else {
        updateInventory(updatedInstrument);

        if (!lineitem) createLineItem(item);
        else {
          updateLineitem({
            ...lineitem,
            quantity: quantity * 1 + lineitem?.quantity,
          });
        }
        window.alert(`${quantity} ${instrument.name} added to cart!`);
      }
    };

    return (
      <>
        {stockMessage && <div style={{ color: "red" }}>{stockMessage}</div>}
        <form onSubmit={Submit}>
          <input
            type="number"
            name="quantity"
            min="0"
            value={quantity}
            onChange={Change}
          />
          <button disabled={quantity == 0}> Add to Cart </button>
        </form>
      </>
    );
  }
}

const mapState = ({ auth, orders, lineitems }) => {
  const cart = orders.find((order) => order.userId === auth.id && order.isCart);
  return {
    orderId: cart?.id,
    lineitems,
  };
};

export default connect(mapState, (dispatch) => {
  return {
    createLineItem: (item) => {
      dispatch(createLineItem(item));
    },
    updateLineitem: (item) => {
      dispatch(updateLineitem(item));
    },
    updateInventory: (instrument) => {
      dispatch(updateInstrument(instrument));
    },
  };
})(AddToCart);
