import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ChartComponent } from ".";
const Repos = () => {
  const { repos } = React.useContext(GithubContext);
  let languages = repos.reduce((sum, el) => {
    if (!el.language) return sum;
    if (!sum[el.language]) {
      sum[el.language] = { label: el.language, value: 1 };
    } else {
      {
        sum[el.language] = {
          ...sum[el.language],
          value: sum[el.language].value + 1,
        };
      }
    }
    return sum;
  }, {});
  languages = Object.values(languages);

  return (
    <Wrapper>
      <ChartComponent data={languages} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  svg {
    border-radius: 1rem !important;
  }
`;

export default Repos;
