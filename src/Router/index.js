import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Result from "../pages/Result";
import Logout from "../pages/Logout";
import Notfound from "../pages/Notfound";

  class RouterNavi extends React.Component{
    render(){
        return(
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="*" element={<Notfound />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Result" element={<Result />} />
                    <Route path="/Logout" element={<Logout />} />
                </Routes>
            </Router>
         
        )
    }
  }

  export default RouterNavi