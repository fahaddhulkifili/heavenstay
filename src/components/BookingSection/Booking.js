import React from "react";
import "./Booking.scss";
import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";

const Booking = () => {
  return (
    <Container>
      <section className="booking-banner">
        <div className="booking-banner-inner">
          <p>Discover the joy of booking with us</p>
          <Button
            href={
              "https://www.booking.com/hotel/in/heaven-stay-varkala.en-gb.html#availability"
            }
            target={"_blank"}
            type={"secondary"}
          >
            Book Now
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default Booking;
