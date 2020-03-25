import React, { useState } from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import Inbox from "./pages/Inbox";
import About from "./pages/About";
import Contact from "./pages/Contact";


import { NavMenu } from './pages/NavMenu';


import { AuthContext } from "./context/auth";


function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <Router>
              <NavMenu />
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
            <PrivateRoute path="/admin" component={Admin} />
            <PrivateRoute path="/inbox" component={Inbox} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
