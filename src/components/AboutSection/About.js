import React from "react";
import Container from "../UI/Container/Container";
import "./About.scss";
import Location from "../../resources/svg/Location";
import Room from "../../resources/svg/Room";
import Wifi from "../../resources/svg/Wifi";
import Parking from "../../resources/svg/Parking";
import Petfriendly from "../../resources/svg/Petfriendly";
import Outdoor from "../../resources/svg/Outdoor";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <React.Fragment>
      <section className="about">
        <Container>
          <div className="about__container">
            <div className="about__container-item">
              <Location />
              <p>Good Location</p>
              <span>Varkala beach is only 1.2 miles from the property.</span>
            </div>
            <div className="about__container-item">
              <Room />
              <p>3 Spacious Rooms</p>
              <span>
                Air conditioned spacious rooms will make you feel like home
              </span>
            </div>
            <div className="about__container-item">
              <Wifi />
              <p>100% Internet Connected</p>
              <span>
                Free wifi is available to make your workcation seamless.
              </span>
            </div>
            <div className="about__container-item">
              <Parking />
              <p>Free Parking</p>
              <span>
                Free private parking is possible on property for 2/3 cars
              </span>
            </div>
            <div className="about__container-item">
              <Petfriendly />
              <p>Pet friendly</p>
              <span>We warmly welcomes your furry companions.</span>
            </div>
            <div className="about__container-item">
              <Outdoor />
              <p>Outdoor Facilities</p>
              <span>
                BBQ, balcony, terrace: enhancing your stay, creating memories.
              </span>
            </div>
          </div>
        </Container>
      </section>
      <section className="our-story">
        <Container>
          <div className="our-story__container">
            <div className="our-story__container-image">
              <StaticImage
                src="../../images/blob.png"
                alt="bedroom-first"
                className="bedroom-first"
              />
            </div>
            <div className="our-story__container-info">
              <span>Our Story</span>
              <p>
                Founded with a passion for hospitality and a deep love for
                Varkala, our journey began in 2023. It was a dream to create a
                space that would resonate with the unique spirit of this coastal
                paradise. Drawing inspiration from the rich cultural tapestry of
                Kerala, we set out to curate a space where modern comfort meets
                traditional warmth.
              </p>
              <p>
                At Heaven Stay, we are committed to creating unforgettable
                memories for our guests. Our dedicated team goes above and
                beyond to ensure your stay is comfortable, enjoyable, and truly
                authentic. Immerse yourself in a world of serenity and
                hospitality. Our thoughtfully designed accommodations are a
                seamless blend of contemporary amenities and local
                craftsmanship. Each room is a testament to the vibrant colors,
                textures, and artistry that define the region.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="gallery">
        <Container>
          <div className="gallery__container-head">
            <span className="head">Gallery</span>
          </div>
          <div className="gallery__container">
            <div className="gallery__container-text">
              <span>Authentic captures, genuine comfort.</span>
            </div>
            <div className="gallery__grid">
              <StaticImage
                src="../../images/gallery/bedroom-first.JPG"
                alt="bedroom-first"
                className="bedroom-first"
              />
              <StaticImage
                src="../../images/gallery/bedroom-second.JPG"
                alt="bedroom-second-angle"
                className="bedroom-second"
              />
              <StaticImage
                src="../../images/gallery/bedroom-third.JPG"
                alt="bedroom-third"
                className="bedroom-third"
              />

              <StaticImage
                src="../../images/gallery/bedroom-second-v2.JPG"
                alt="bedroom-second"
                className="bedroom-second"
              />
              <StaticImage
                src="../../images/gallery/bedroom-third-v2.JPG"
                alt="bedroom-third-angle"
                className="bedroom-third"
              />
              <StaticImage
                src="../../images/gallery/dining.JPG"
                alt="dining"
                className="dining"
              />
              <StaticImage
                src="../../images/gallery/hall.JPG"
                alt="hall"
                className="hall"
              />
              <StaticImage
                src="../../images/gallery/hall-v2.JPG"
                alt="hall-angle"
                className="hall"
              />
              <StaticImage
                src="../../images/gallery/kitchen.JPG"
                alt="kitchen"
                className="kitchen"
              />
              <StaticImage
                src="../../images/gallery/work-area.JPG"
                alt="work-area"
                className="work-area"
              />
              <StaticImage
                src="../../images/gallery/front-view.jpg"
                alt="front-view"
                className="front-view"
              />
              <StaticImage
                src="../../images/gallery/courtyard.jpg"
                alt="courtyard"
                className="courtyard"
              />
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default About;
