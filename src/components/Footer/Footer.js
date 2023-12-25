import React from "react";
import * as styles from "./Footer.module.scss";
import HeavenStayLogo from "../../resources/icons/HeavenStayLogo";
import Container from "../UI/Container/Container";
import mapImg from "../../images/map-image.png";
import Button from "../UI/Button/Button";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <Container>
        <div className={styles.footer__container}>
          <div className={styles.footer__left}>
            <a href="#hero" className={styles.footer__logo}>
              <HeavenStayLogo />
            </a>
            <div className={styles.footer__navs}>
              <div className={styles.footer__links}>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Testimonial</a>
                  </li>
                  <li>
                    <a href="">Booking</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footer__social_links}>
                <span>Find us on</span>
                <ul>
                  <li className="facebook">
                    <a href="#">Facebook</a>
                  </li>
                  <li className="instagram">
                    <a href="#">Instagram</a>
                  </li>
                  <li className="youtube">
                    <a href="#">Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footer__center}>
            <span>Locate on google map</span>
            <div className={styles.footer__map}>
              <img src={mapImg} alt="map-image" />
              <div className={styles.footer__map_btn}>
                <Button type={"secondary"}>Open in map</Button>
              </div>
            </div>
          </div>
          <div className={styles.footer__right}>
            <span>Address & Contact</span>
            <ul>
              <li className={styles.address}>
                House No. 30, Heaven Stay, 109 Janardhanapuram, Mundayil Beach
                Rd, near Kumili Temple, Varkala, Kerala 695141, India
              </li>
              <li className={styles.contact}>+91 99954 42236</li>
              <li className={styles.mail}>info@heavenstay.com</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
