import React, { useState } from "react";
import "./MyCart.css";

const MyCart = (props) => {
  let totalPrice = 0;
  props.data.map((item, i) => (totalPrice += parseInt(item.price)));

  props.trendData.map((item, i) => (totalPrice += parseInt(item.price)));
  props.awardData.map((item, i) => (totalPrice += parseInt(item.price)));
  props.gallData.map((item, i) => (totalPrice += parseInt(item.price)));

  const [pay, setPay] = useState(0);
  const [payFirst, setPayFirst] = useState(1);
  const [finalPay, setFinalPay] = useState(0);
  function payClicked() {
    setPay(1);
    setPayFirst(0);
  }
  function finalpayClicked() {
    setFinalPay(1);
    setPay(0);
  }
  return (
    <div className={props.className}>
      <h1 className="my-cart-heading">Your Added Books</h1>
      <table
        border="3"
        className="my-cart-table"
        cellPadding={10}
        cellSpacing={0}
      >
        <thead>
          <tr>
            <td>Book</td>
            <td>Author</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, i) => (
            <tr key={i}>
              <td className="table-name">{item.name}</td>
              <td>{item.author}</td>
              <td className="table-price">
                <div className="table-rupee">&#8377;</div>
                {item.price}
              </td>
            </tr>
          ))}
          {props.trendData.map((item, i) => (
            <tr>
              <td className="table-name">{item.name}</td>
              <td>{item.author}</td>
              <td className="table-price">
                <div className="table-rupee">&#8377;</div>
                {item.price}
              </td>
            </tr>
          ))}
          {props.awardData.map((item, i) => (
            <tr>
              <td className="table-name">{item.name}</td>
              <td>{item.author}</td>
              <td className="table-price">
                <div className="table-rupee">&#8377;</div>
                {item.price}
              </td>
            </tr>
          ))}
          {props.gallData.map((item, i) => (
            <tr>
              <td className="table-name">{item.name}</td>
              <td>{item.author}</td>
              <td className="table-price">
                <div className="table-rupee">&#8377;</div>
                {item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="price">
        <h1>Total price</h1>
        <p>
          <div className="table-rupee">&#8377;</div>
          {totalPrice + ".00"}
        </p>
      </div>
      <div className="payment">
        <button
          className={
            payFirst ? "my-cart-btn payment-hide" : "my-cart-btn payment-btn"
          }
          onClick={payClicked}
        >
          Pay {totalPrice + ".00"} (FREE)
        </button>
      </div>

      {/**Hidden */}
      <div
        className={pay ? "payment-modes payment-modes-active" : "payment-modes"}
      >
        <div className="pay-mode-wrapper">
          <h1>Choose one of them</h1>
          <form>
            <div className="mode1 pay-mode">
              <input type="radio" name="pay-mode" />
              <h1>Pay through UPI </h1>
            </div>
            <div className="mode1 pay-mode">
              <input type="radio" name="pay-mode" />
              <h1>Net Banking</h1>
            </div>
            <div className="mode1 pay-mode">
              <input type="radio" name="pay-mode" />
              <h1>Pay through PayPal</h1>
            </div>
            <div className="mode1 pay-mode">
              <input type="radio" name="pay-mode" />
              <h1>Cash on Delivery</h1>
            </div>
          </form>
        </div>
        <div className="pay-btn">
          <button className="pay-btn my-cart-btn" onClick={finalpayClicked}>
            Pay Now (FREE) {totalPrice + ".00"}{" "}
          </button>
        </div>
      </div>
      <div className={finalPay ? "my-cart-last-active" : "my-cart-last"}>
        <h1>
          Thank you fro Ordering and Visiting us, your Order will be at your
          home door super soon...
        </h1>
      </div>
    </div>
  );
};

export default MyCart;
