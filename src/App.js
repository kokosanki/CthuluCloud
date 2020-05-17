import React from "react";
import CurrentPage from "./Pages/CurrentPage";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";
import { Normalize, normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  a {
    text-decoration: none;
  }

  body {
    background-color: #fff;
    display: flex;
    width: 100%;
    flex-direction: column;
    font-family: 'Questrial', sans-serif;
  }
`;

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Normalize />
      <div className="App">
        <BrowserRouter>
          <CurrentPage />
        </BrowserRouter>
      </div>
    </Theme>
  );
}

export default App;
