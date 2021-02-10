import React from 'react';
import styled from 'styled-components';
import LogoImgSrc from '../images/movieSearch_logo.svg';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoTitle = styled.h1`
  color: #000;
  display: flex;
  margin: 0 30px 0 0;

  @media (max-width: 430px) {
    display: none;
  }
`;

const LogoImg = styled.img.attrs(({ src }) => ({
  src: src
}))`
  height: 30px;
  width: auto;
  margin-right: 10px;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg src={LogoImgSrc} />
      <LogoTitle>movieSearch</LogoTitle>;
    </LogoWrapper>
  );
};

export default Logo;
