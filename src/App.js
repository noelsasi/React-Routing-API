import React from "react";
import "./App.css";
import About from "./about";
import Contact from "./contact";
import Details from "./details";
import Nav from "./nav";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/apiData" exact component={About} />
        <Route path="/apiData/:id" component={Details} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="mt-5">
    <h1>.Main Container</h1>
    <h4 className="mt-5 bg-light-gray text-borders p-4 col-md-8 mx-auto">
      I'm basically Trying to route to multiple pages through Navbar Links{" "}
    </h4>
    <h4 className="mt-3 bg-light-gray text-borders p-4 col-md-8 mx-auto">
      Then I'm Fetching an API data which is an Array[], here in {""}
      <Link to="/apiData">
        <u>Api Data Page</u>
      </Link>
    </h4>
    <h4 className="mt-3 bg-light-gray text-borders p-4 col-md-8 mx-auto">
      So, In{" "}
      <Link to="/apiData">
        <u>Api Data Page</u>
      </Link>{" "}
      page you can see list of Items. Now click on single item You'll route to
      another page with that Item Details
    </h4>
    <Link to="/apiData">
      <button className="btn btn-md btn-primary mt-4">
        Lets get Started -->
      </button>
    </Link>
  </div>
);

export default App;
