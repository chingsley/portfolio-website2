import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { StyledIcon, SocialContainer } from './SocialIconsStyles';

const SocialIcons = (props) => {
  return (
    <SocialContainer shouldWrap={props.shouldWrap}>
      <StyledIcon href="http://github.com/chingsley" target='branch'>
        <AiFillGithub size="3rem" />
      </StyledIcon>
      <StyledIcon href="https://linkedin.com/in/kingsley-eneja-3a376a160" target='branch'>
        <AiFillLinkedin size="3rem" />
      </StyledIcon>
      <StyledIcon href="https://www.instagram.com/" target='branch'>
        <AiFillInstagram size="3rem" />
      </StyledIcon>
    </SocialContainer>
  );
};

export default SocialIcons;