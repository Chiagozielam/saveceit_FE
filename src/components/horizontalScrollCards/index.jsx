import React from "react";
import Card from "./Card";
import "./HorizontalScrollScar.css";

const HorizontalScrollCards = () => {
  return (
    <div className="horizontal-scroll-card-grid">
      <div>
        <Card
          cardHeader="Create An Account"
          cardText="Creating an account is so easy. We know you don't like
          a registration form that's so long and seems like
          there'll never be an end, so we kept it short and
          simple, while requiring only information we need to
          get you started."
          backgroundColor="#001529"
          color="white"
        />
      </div>
      <div>
        <Card
          cardHeader="Upload Receipts"
          cardText="Upon successful registration, you'll be amazed how
          easy it is to add receipts collections. Receipt
          collections enable you to add multiple related
          receipts at once, to one collection."
          backgroundColor="#001529"
          color="white"
        />
      </div>
      <div>
        <Card
          cardHeader="Live Digitally"
          cardText=" Oops... Do you really need all those piece of papers
          in your bag? Embrace the digital culture, and have all
          your receipts safely kept together in one place which
          can be accessed from anywhere in the world!"
          backgroundColor="#001529"
          color="white"
        />
      </div>
    </div>
  );
};

export default HorizontalScrollCards;
