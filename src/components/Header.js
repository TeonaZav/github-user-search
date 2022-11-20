import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <Wrapper>
      <header>
        <div className="header-top">
          <Navbar />
        </div>
        <div className="header-bottom-container"></div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100vw;
  margin-bottom: 4rem;

  .header-top {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 10rem;
    color: var(--cl-text);
  }
  .header-bottom-container {
    min-height: 6rem;
    width: 100vw;
    background-image: linear-gradient(92deg, #0b5289, #094370);
    box-shadow: 0 3px 10px -8px rgba(0, 0, 0, 0.24);
  }
  @media (min-width: 48em) {
    width: 100vw;
    margin-bottom: 4rem;
  }
  @media (min-width: 90em) {
  }
`;
export default Header;
