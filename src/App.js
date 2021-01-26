import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import JobListPage from "./pages/JobListPage";
import ErrorMsgPage from "./pages/ErrorMsgPage";
import JobItemDetailsPage from "./pages/JobItemDetailsPage";
import StartPage from "./pages/StartPage";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: auto;
`;

function App() {
  return (
    <Wrapper>
      <Switch>
        <Route path="/jobs/:id" component={JobItemDetailsPage} />
        <Route path="/jobs" component={JobListPage} />
        <Route path="/error" component={ErrorMsgPage} />
        <Route path="/" component={StartPage} />
      </Switch>
    </Wrapper>
  );
}

export default App;
