import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { LogoSun, LogoMoon } from "./Logo";

const Navbar = () => {
  const {
    request,
    apiError,
    theme,
    toggleThemeHandler,
    setDarkLogoColor,
    setLightLogoColor,
  } = React.useContext(GithubContext);
  const logoHandler1 = () => {
    setDarkLogoColor("#90a4d4");
    setLightLogoColor("#2b3442");
  };
  const logoHandler2 = () => {
    setDarkLogoColor("#FFF");
    setLightLogoColor("#697C9A");
  };
  return (
    <Wrapper>
      <div className="header-left">
        <h1>devfinder</h1>
        <div className="requests-wrap">
          <h4>Remaining API Requests: {request} / 60</h4>
          <div>
            {request <= 0 ? (
              <ErrorWrapper>
                <p>{apiError.msg}</p>
              </ErrorWrapper>
            ) : null}
          </div>
        </div>
      </div>

      {theme === "light" ? (
        <div
          className="switch-wrap"
          onClick={toggleThemeHandler}
          onMouseOver={logoHandler1}
          onMouseLeave={logoHandler2}
        >
          <p>DARK</p>
          {<LogoMoon className="icon" />}
        </div>
      ) : (
        <div
          className="switch-wrap"
          onClick={toggleThemeHandler}
          onMouseOver={logoHandler1}
          onMouseLeave={logoHandler2}
        >
          <p>LIGHT</p>
          {<LogoSun />}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: var(--ct-width-sm);
  margin-top: 3.1rem;
  margin-bottom: 3.5rem;
  color: var(--cl-bold);
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  .switch-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;
    cursor: pointer;
    margin-top: 1rem;
    p {
      color: var(--cl-text);
    }
  }
  .switch-wrap:hover p {
    color: var(--cl-switch-hover);
  }

  .header-left {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .requests-wrap {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      h4 {
        color: var(--cl-text);
      }
    }
  }
  @media (min-width: 48em) {
    width: var(--ct-width-md);
    .header-left {
      .requests-wrap {
        h4 {
          color: var(--cl-text);
        }
      }
    }
  }
  @media (min-width: 90em) {
    width: var(--ct-width-lg);
    .header-left {
      .requests-wrap {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
      }
    }
  }
`;
const ErrorWrapper = styled.article`
  text-transform: capitalize;
  p {
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--cl-error);
  }
  @media (min-width: 48em) {
    p {
      font-size: 1.5rem;
      font-weight: 400;
      color: var(--cl-error);
    }
  }
  @media (min-width: 90em) {
    p {
      margin-left: 2.4rem;
    }
  }
`;
export default Navbar;
