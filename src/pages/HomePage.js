import React, { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation/Navigation";
import Section from "../components/Sections/Sections";
import HeroBanner from "../components/HeroSection/HeroBanner";
import About from "../components/AboutSection/About";
import Testimonial from "../components/TestimonialSection/Testimonial";
import Booking from "../components/BookingSection/Booking";
import Footer from "../components/Footer/Footer";
import "../styles/index.scss";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("section1");
  const sections = useRef([
    { id: "hero", label: "hero", sectionContent: <HeroBanner /> },
    { id: "about", label: "about", sectionContent: <About /> },
    {
      id: "testimonial",
      label: "testimonial",
      sectionContent: <Testimonial />,
    },
    { id: "booking", label: "booking", sectionContent: <Booking /> },
  ]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.ref.offsetTop;
      const sectionHeight = section.ref.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = sections.current.map((section) => ({
      ...section,
      ref: document.getElementById(section.id),
    }));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navigation activeSection={activeSection} sections={sections.current} />
      <div style={{ marginTop: "40px" }}>
        {sections.current.map((section) => (
          <Section key={section.id} id={section.id}>
            {section.sectionContent}
          </Section>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
