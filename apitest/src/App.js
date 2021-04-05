import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from './pages/Top.js';
import Profile from './pages/Profile';

function App () {

  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route exact
              path="/"
              render={() => <Top/>}></Route>
          <Route
          exact
          path="/profile/:id"
          render={() => <Profile/>}
          />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;