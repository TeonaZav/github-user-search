import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
const Search = () => {
  const [user, setUser] = React.useState("");
  const { searchUser, searchError } = React.useContext(GithubContext);
  const submitHandler = (e) => {
    e.preventDefault();
    if (user) searchUser(user);
  };
  return (
    <Wrapper>
      <div>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            {searchError.msg ? (
              <ErrorWrapper>
                <p>{searchError.msg}</p>
              </ErrorWrapper>
            ) : null}
            <img
              src={process.env.PUBLIC_URL + "/assets/icon-search.svg"}
              alt="search icon"
            />
            <input
              type="text"
              placeholder="Search GitHub username…"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <button className="btn btn-search" type="submit">
            Search
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--ct-width-sm);
  height: 6rem;
  padding: 1.8rem 9.8rem 1.7rem 1.6rem;
  background-color: var(--cl-ct);
  border-radius: 1.5rem;
  position: relative;
  margin-bottom: 1.6rem;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 1.7rem;
    height: 1.7rem;
  }
  .btn-search {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .form-control {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    input {
      background-color: var(--cl-ct);
      border-color: transparent;
      color: var(--cl-input);
      font-size: 1.3rem;
      line-height: 2.5;
      height: 3rem;
      width: 18.4rem;
      font-weight: 400;
      margin-left: 1.1rem;
      border-radius: 0.5rem;
    }
    input::placeholder {
      color: var(--cl-input-pale);
      font-size: 1.3rem;
    }
    input:focus {
      outline: var(--cl-outline) solid 2px;
    }
  }
  @media (min-width: 48em) {
    width: var(--ct-width-md);
    height: 6.9rem;
    padding: 2.3rem 1rem 2.3rem 3.2rem;
    margin-bottom: 2.4rem;
    img {
      width: 2.1rem;
      height: 2.1rem;
    }
    .form-control {
      input {
        font-size: 1.8rem;
        height: 3rem;
        width: 35rem;
        margin-left: 2.4rem;
      }
      input::placeholder {
        font-size: 1.8rem;
      }
    }
  }
  @media (min-width: 90em) {
    width: var(--ct-width-lg);
    .form-control {
      input {
        width: 50rem;
      }
    }
  }
`;
const ErrorWrapper = styled.article`
  text-transform: capitalize;
  position: absolute;
  top: 2%;
  left: 4.5rem;
  z-index: 1000;
  p {
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--cl-error);
  }

  @media (min-width: 48em) {
    top: 50%;
    transform: translateY(-50%);
    left: 35rem;
    p {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 90em) {
    top: 50%;
    left: 49.8rem;
  }
`;
export default Search;
