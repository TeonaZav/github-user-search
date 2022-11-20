import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
const ContactData = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { twitter_username, location, company, blog } = githubUser;
  return (
    <Wrapper>
      <div className={`${location ? "text-normal" : "text-pale"}`}>
        <img
          src={process.env.PUBLIC_URL + "/assets/icon-location.svg"}
          alt="icon"
        />
        {location || "No Location"}
      </div>
      <div className={`${twitter_username ? "text-normal" : "text-pale"}`}>
        <img
          src={process.env.PUBLIC_URL + "/assets/icon-twitter.svg"}
          alt="icon"
        />
        @{twitter_username || "Not Available"}
      </div>
      <div className={`${blog ? "text-normal" : "text-pale"}`}>
        <img
          src={process.env.PUBLIC_URL + "/assets/icon-website.svg"}
          alt="icon"
        />
        {blog || "No blog"}
      </div>
      <div className={`${company ? "text-normal" : "text-pale"}`}>
        <img
          src={process.env.PUBLIC_URL + "/assets/icon-company.svg"}
          alt="icon"
        />
        {company || "No Company"}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.7rem;
  column-gap: 6.2rem;
  font-size: 1.5rem;
  line-height: 2.2rem;
  div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
  img {
    max-width: 2rem;
    max-height: 2rem;
  }
  .text-normal {
    color: var(--cl-text);
  }
  .text-pale {
    color: var(--cl-text-pale);
  }
  @media (min-width: 48em) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 1.9rem;
  }
  @media (min-width: 90em) {
    width: 48rem;
  }
`;

export default ContactData;
