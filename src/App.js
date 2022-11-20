import React, { useContext } from "react";
import Home from "./components/Home";
import { GithubContext } from "./context/context";
function App() {
  const { theme } = useContext(GithubContext);
  return (
    <div className="App" data-them={theme}>
      <Home />
    </div>
  );
}

export default App;
