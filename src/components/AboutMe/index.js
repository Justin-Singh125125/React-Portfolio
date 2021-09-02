import React from 'react';

import Fade from 'react-reveal/Fade';

//components
import SvgIcon from '../../components/SvgIcon';
import Technologies from '../../components/Technologies';

//Resume
import Resume from '../../assets/img/Singh, Justin.pdf';

const AboutMe = (props) => {
  return (
    <Fade right duration={1500}>
      <div className="about-me">
        <h2 className="about-me__text">About Me</h2>
        <p className="about-me__info">
          I am a Software Engineer/Certified Full Stack Web Developer with a bachelor's degree in
          Computer Science. I specialize in JavaScript and building frontend React applications,
          however, I do have experience building REST API's along with database management in both
          relational/non-relational databases. I have launched several frontend applications built
          with Salesforce lightning components and React. My current role consists of leading the
          development of multiple React/React Native applications. I also possess a startup company
          where I am building a React Native application.
        </p>

        <Technologies
          technologies={[
            'C++',
            'Javascript',
            'HTML',
            'CSS',
            'Express',
            'React',
            'MongoDB',
            'MySQL',
          ]}
        />
        <div className="about-me__btn-section">
          <a id="center" className="test btn btn--green" href={Resume} download>
            Download Resume <SvgIcon svgClass="about-me__btn-icon" svgSelection="icon-download3" />
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default AboutMe;
