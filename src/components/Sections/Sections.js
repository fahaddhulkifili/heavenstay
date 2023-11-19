import React from "react";

const Section = ({ id, children }) => {
  return (
    <div data-section id={id}>
      {children}
    </div>
  );
};

export default Section;
