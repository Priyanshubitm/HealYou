import React from 'react';

const Section = ({ title, content }) => {
  return (
    <section>
      <h3>{title}</h3>
      {content}
    </section>
  );
};

export default Section;