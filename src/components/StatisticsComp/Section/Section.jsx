import React from 'react';

import s from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
export default Section;
