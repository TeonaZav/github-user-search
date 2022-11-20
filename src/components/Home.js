import React from "react";
import { Info, Followers, Search, Header, Repos } from ".";
import styled from "styled-components";
import loadingImage from "../images/loading.gif";
import { GithubContext } from "../context/context";
const Home = () => {
  const { githubUser, loading } = React.useContext(GithubContext);

  return (
    <Wrapper>
      <Header />
      <div className="home">
        <div className="home-main-ct">
          <Search />
          <div className="container">
            {loading ? (
              <img
                className="loading-img"
                src={loadingImage}
                alt="loading icon"
              />
            ) : null}
            <Info />
          </div>
        </div>
        <div className="followers-chart-wrap">
          <div>
            <Repos className="chart" />
          </div>
          <div className="section">
            <Followers />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    gap: 2.4rem;
    .home-main-ct {
      width: var(--ct-width-sm);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .followers-chart-wrap {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.4rem;
    }
  }
  /* more than 768PX (for tablet )*/
  @media (min-width: 48em) {
    .home {
      width: 76.8rem;
      justify-content: center;
      align-items: center;
      .home-main-ct {
        width: var(--ct-width-md);
      }
      .followers-chart-wrap {
        flex-direction: row;
        align-items: flex-start;
        gap: 1.6rem;
      }
    }
  }
  /* more than 1440PX (for desktop )*/
  @media (min-width: 90em) {
    .home {
      width: 144rem;
      flex-direction: row;
      align-items: flex-start;

      .home-main-ct {
        margin: 0;
        width: var(--ct-width-lg);
        justify-content: flex-end;
      }
      .followers-chart-wrap {
        margin: 0;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 2.4rem;
      }
    }
  }
`;

export default Home;
