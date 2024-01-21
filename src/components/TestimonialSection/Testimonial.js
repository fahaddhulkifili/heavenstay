import React from "react";
import Container from "../UI/Container/Container";
import "./Testimonial.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowNav from "../../resources/svg/ArrowNav";
import ArrowNavNext from "../../resources/svg/ArrowNavNext";
import GoogleIcon from "../../resources/svg/GoogleIcon";
import Ratingicons from "../../resources/svg/Ratingicons";

const testimonialData = [
  {
    name: "Fahad",
    testimonailtext:
      "Had an amazing experience with them. The host Mr Binil was very proffesional and made the checkins and thepayments easy and smooth, also the manager of the property Mr Renju was very friendly and helped us a lot. Totally had so much fun and great stay over there",
  },
  {
    name: "Sana",
    testimonailtext:
      "A staycation at Heaven Stay was just what I needed after a stressful week. As the name suggests, a literal heaven at Varkala. ❤️",
  },
  {
    name: "Vyshak Namboothiri",
    testimonailtext: `Best place for a staycation ❤️ Amazing memories, friendly staff and neat rooms. I really enjoyed the stay and glad i took the rooms here.\n Highly recommended! 💯`,
  },
  {
    name: "Arjun Sreekumar",
    testimonailtext:
      "Very elegant and peaceful home at varkala. If you are looking a for a calm and chill place close varakala beach and papanasam this is a really good place. \n It has all the benefits of a proper house like kitchen and living area, air conditioning etc. \n The care take Renju is a very good person. Owner Binil is also a very good person, he was very flexible",
  },
  {
    name: "Akhil Raj",
    testimonailtext:
      "One of the best stays, both the host and caretaker was so helpful, i really recommend this to all",
  },
  {
    name: "Rahul Joseph",
    testimonailtext:
      "One of the best stays we had in our costal ride. Loved the place and the hospitality. Would give more stars if I could. So well maintained. Clean place.",
  },
];

const Testimonial = () => {
  function TestimonialNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="nextArrow" onClick={onClick}>
        <ArrowNavNext />
      </div>
    );
  }

  function TestimonialPrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="prevArrow" onClick={onClick}>
        <ArrowNav />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <TestimonialNextArrow />,
    prevArrow: <TestimonialPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section className="testimonial">
      <Container>
        <div className="testimonial__container">
          <div className="testimonial__content">
            <div className="testimonial__content-text">
              <span>Discover What Our Clients Love About Us</span>
            </div>
          </div>
          <div className="testimonial__head">
            <span>Testimonial</span>

            <Slider {...settings}>
              {testimonialData.map((data, index) => {
                return (
                  <div
                    className="testimonial-card"
                    data-index={index}
                    key={index}
                  >
                    <div className="testimonial-card-inner">
                      <div className="testimonial-card-user">
                        <div className="testimonial-card-user-details">
                          <div className="avatar">
                            <span>
                              {data.name.charAt(0).toLocaleUpperCase()}
                            </span>
                            <p>{data.name}</p>
                          </div>
                          <div className="testimonial-card-info">
                            <p>{data.testimonailtext}</p>
                          </div>
                        </div>
                        <div className="testimonial-card-rating">
                          <GoogleIcon />
                          <Ratingicons />
                          <p>5/5</p>
                        </div>
                      </div>
                      <div className="link">
                        <a
                          target="_blank"
                          href="https://www.google.com/search?q=heaven+stay+varkala&oq=heaven+stay+varkala&gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhIIARAuGCcYrwEYxwEYgAQYigUyDQgCEAAYhgMYgAQYigUyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyDQgFEAAYhgMYgAQYigWoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3b05ef07dc92766b:0xe4f1c5dff47ef6a4,1,,,,"
                        >
                          <span>View on Google</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
