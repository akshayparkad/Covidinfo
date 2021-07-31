import React from "react";
import Search from "./components/Search";
import Header from "./components/header";
import Certificate from "./components/Certificate";
import {Router, Route, Switch} from "react-router-dom";
import History from "./History";
import Confirm from "./components/Confirm";
import Download from "./components/Download";
import Availability from "./components/Availability";
import Footer from "./components/Footer";

const App = () => {
  return (
   <div className="container">
    <div>
      <Router history={History}>
        <div>
      <Header />
      <Switch>
      <Route path="/" exact component={Availability} />
      <Route path="/certificate" exact component={Certificate} />
      <Route path="/authorise" exact component={Confirm} />
      <Route path="/pincode" exact component={Search} />
      <Route path="/downloadpdf" exact component={Download} />
      </Switch>
      </div>
      <Footer />
      </Router>
    </div>
    
    </div>
    
  );
};

export default App;
