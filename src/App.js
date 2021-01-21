import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import JobList from './components/JobList';
import JobItemDetailsPage from './pages/JobItemDetailsPage';
import StartPage from './pages/StartPage';

const Wrapper = styled.div`
display: flex; 
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background: #ede7e3;
`

function App() {


  return (
    <Wrapper>
        <Switch>
           <Route path="/jobs/:id" component={JobItemDetailsPage} />
           <Route path="/jobs" component={JobList} />
           <Route path="/" component={StartPage}/>
       </Switch>
    </Wrapper>
  );
}

export default App;
