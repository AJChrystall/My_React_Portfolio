import React from 'react';

function AboutMe({ currentSection }) {
  return (
    <section className={currentSection === 'About Me' ? 'selected' : ''}>
      <img src="path/to/photo" alt="Developer" />
      <p>Hello I am a new JavaScript Developer.</p>
    </section>
  );
}

export default AboutMe;

