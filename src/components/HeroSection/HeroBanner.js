import React from "react";
import coverImg from "../../images/heroCoverImage.jpg";
import Container from "../UI/Container/Container";
import "./HeroBanner.scss";

const HeroBanner = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__container">
          <div className="hero__cover">
            <img
              src={coverImg}
              className="hero__image"
              alt="heaven-stay-cover"
            />
          </div>
          <div className="hero__overlay">
            <span>Your Secret Haven </span>
            <span>Unplug, Recharge, Discover Homestay Bliss</span>
            <p>
              Discover the allure of Varkala while staying in the comfort of the
              homelike atmosphere.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
