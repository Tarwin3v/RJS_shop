import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_zGa70g2WEbATEAt8OObL0VTS00Y79vrTC4";

  const onToken = token => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="SHOP"
      billingAdress
      shippingAddress
      image=""
      description={`Your total is ${price} euro`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
