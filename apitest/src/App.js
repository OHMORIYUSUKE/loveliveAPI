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
              ><Top /></Route>
          <Route
          path="/profile/:id"
          ><Profile /></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;