import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I am a full stack software engineer with a degree in computer engineering and over 5 years of professional experience. I specialise in architecting, designing and developing highly scalable software systems.
        </SectionText>
        <Button onClick={props.handleClick}>View Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;