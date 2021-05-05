import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Menu from './components/menu/Menu';
import UserChoice from './components/menu/UserChoice';
// import Log from './components/profile/Log';

import Home from './components/home/Home';
import Shop from './components/shop/Shop';

import SignIn from './components/profile/signin/SignIn';
import SignUp from './components/profile/signup/SignUp';
import Map from './components/Map/Map';
import AuthContext from './firebase/AuthContext';

function App() {
  const [isUserChoiceExpended, setIsUserChoiceExpended] = useState(false);

  return (
    <div className="App">
      <AuthContext>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/map">
              <Map />
            </Route>
            {/* <Route exact path="/profile">
              <Log />
            </Route> */}
            <Route exact path="/signIn">
              <SignIn />
            </Route>
            <Route exact path="/signUp">
              <SignUp />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
          </Switch>
          <UserChoice isUserChoiceExpended={isUserChoiceExpended} />
          <Menu
            isUserChoiceExpended={isUserChoiceExpended}
            clickOnUser={() => {
              console.log('click', isUserChoiceExpended);
              setIsUserChoiceExpended(!isUserChoiceExpended);
            }}
          />
        </Router>
      </AuthContext>
    </div>
  );
}

export default App;
