import React from 'react';
import Header from './common/Header';
import HomePage from './HomePage';
import CreateBoardPage from './CreateBoardPage';
import { Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/board" component={CreateBoardPage} />
      </Switch>
    </div >
  )
}

export default App;
