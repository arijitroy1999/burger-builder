import React from "react";
import Aux from "../../../hoc/aux";
import Button from "../../UI/Button/Button";
import classes from "./OrderSummary.module.css";
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout</p>
      <Button
        className={classes.Order}
        btnType="Danger"
        clicked={props.purchaseCancelled}
      >
        CANCEL
      </Button>
      <Button
        className={classes.Order}
        btnType="Success"
        clicked={props.purchaseContinued}
      >
        CONTINUE
      </Button>
    </Aux>
  );
};
export default orderSummary;
