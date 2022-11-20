import React, { useState, useEffect } from "react";
import defaultUser from "./defaultData.js/defaultUser";
import defaultRepos from "./defaultData.js/defaultRepos";
import defaultFollowers from "./defaultData.js/defaultFollowers";
import axios from "axios";

const URL = "https://api.github.com";
const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(defaultUser);
  const [repos, setRepos] = useState(defaultRepos);
  const [followers, setFollowers] = useState(defaultFollowers);
  const [theme, setTheme] = useState("light");
  const [chartCl, setChartCl] = useState("#ffffff");
  // request loading
  const [request, setRequest] = useState(0);
  const [loading, setLoading] = useState(false);

  //error
  const [apiError, setApiError] = useState({ show: false, msg: "" });
  const [searchError, setSearchError] = useState({ show: false, msg: "" });
  /*========== 
    search User
    ========== */
  const searchUser = async (user) => {
    toggleSearchErr();
    setLoading(true);
    const response = await axios(`${URL}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithubUser(response.data);
      const { login } = response.data;
      const { followers_url } = response.data;
      //get user repositories
      axios(`${URL}/users/${login}/repos?per_page=100`).then((response) =>
        setRepos(response.data)
      );
      //get user followers
      axios(`${followers_url}?per_page=100`).then((response) =>
        setFollowers(response.data)
      );
    } else {
      toggleSearchErr(true, "No results");
    }
    setLoading(false);
  };

  /*========== 
    check API rate
    ========== */
  const checkRequest = () => {
    toggleApiErr();
    axios(`${URL}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequest(remaining);
        if (remaining === 0) {
          //error
          toggleApiErr(true, "/ Hourly limit exceeded!");
        }
      })
      .catch((err) => console.log(err));
  };
  /*========== 
    TOGGLE API ERROR 
    ========== */
  function toggleApiErr(show = false, msg = "") {
    setApiError({ show, msg });
  }
  /*======= 
    TOGGLE INCORRECT USER ERROR 
    ======= */
  function toggleSearchErr(show = false, msg = "") {
    setSearchError({ show, msg });
  }
  /*=======
   TOGGLE LIGHT/DARK THEME
  ======= */
  const toggleThemeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      setChartCl("#1e2a47");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      setChartCl("#ffffff");
      localStorage.setItem("theme", "light");
    }
  };
  const getSavedTheme = () => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", theme);
      localStorage.setItem("cl", chartCl);
    } else {
      let localTheme = localStorage.getItem("theme");
      setTheme(localTheme);
      localTheme === "dark" ? setChartCl("#1e2a47") : setChartCl("#ffffff");
    }
  };

  /*=======
   themeSwitch logos fake hover effect
  ======= */

  const [darkLogoColor, setDarkLogoColor] = useState("#FFF");
  const [lightLogoColor, setLightLogoColor] = useState("#697C9A");
  useEffect(checkRequest, []);
  useEffect(() => {
    getSavedTheme();
  }, []);
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        request,
        searchError,
        setSearchError,
        apiError,
        setApiError,
        searchUser,
        loading,
        theme,
        toggleThemeHandler,
        darkLogoColor,
        setDarkLogoColor,
        lightLogoColor,
        setLightLogoColor,
        chartCl,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export { GithubProvider, GithubContext };
