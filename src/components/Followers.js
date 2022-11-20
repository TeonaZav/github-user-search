import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";

const Followers = () => {
  const { followers } = React.useContext(GithubContext);

  return (
    <Wrapper className="section">
      {followers.length > 0 ? (
        <div className="followers">
          {followers.map((follower, index) => {
            const { avatar_url: img, html_url, login } = follower;
            return (
              <div className="follower-info" key={index}>
                <img src={img} alt="follower avatar" />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>{html_url}</a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="followers">
          <div className="follower-info" key={1}>
            <img
              src="https://as2.ftcdn.net/v2/jpg/03/96/25/35/1000_F_396253517_A2rKQbVKYJZtoRhxDQt11VBGQ48rHboI.jpg"
              alt="follower avatar"
            />
            <div>
              <h4>OOh, sweet child of mine, no followers for you</h4>
              <a href="https://www.quora.com/Whats-the-best-way-to-get-followers-stars-and-forks-on-GitHub">
                How to Get Followers
              </a>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--cl-ct);
  color: var(--cl-text);
  border-radius: 0.5rem;
  position: relative;
  margin-top: 4rem;
  &::before {
    content: " followers";
    position: absolute;
    top: -1%;
    right: 0;
    width: 100%;
    border-radius: 0.5rem;
    transform: translateY(-100%);
    background: var(--cl-ct);
    color: var(--cl-text);
    text-transform: capitalize;
    padding: 1rem;
    font-size: 1.3rem;
  }
  .followers {
    overflow-y: scroll;
    overflow-x: hidden;
    height: calc(var(--ct-height-lg) - 1.6rem);
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(4.5rem, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 1.6rem;
  }
  .follower-info {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 4.5rem;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0;
    }
    a {
      color: var(--cl-blue);
    }
  }

  @media (min-width: 48em) {
    .followers {
      padding: 1rem 0.5rem;
    }
  }
  @media (min-width: 90em) {
    .followers {
      padding: 1rem 1.6rem;
    }
  }
`;
export default Followers;
