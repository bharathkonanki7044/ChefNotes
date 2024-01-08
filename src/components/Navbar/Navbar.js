import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { useHistory } from "react-router-dom";
import Auth from "../../utils/Auth";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const googleSignIn = async () => {
    try {
      await Auth();
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    auth().onAuthStateChanged(function (user) {
      if (user) {
        setFirstName(user.displayName);

        history.push("/recipe");
      } else console.log("No user is logged in.");
    });
  }, [history, firstName]);

  return (
    <header>
      <nav id="nav">
        <div className="container">
          <h1 className="logo">
            <i className="fa fa-cutlery"></i> ChefNotes.
          </h1>

          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipe">Recipes</Link>
            </li>
            <li>
              <Link to="/recipe">Upload</Link>
            </li>
          </ul>

          {firstName ? (
            <Link
              to="/"
              onClick={() => {
                auth().signOut();
                setFirstName("");
              }}
            >
              {" "}
              <button className="btn">Sign Out</button>
            </Link>
          ) : (
            <button className="btn" onClick={googleSignIn}>
              Sign Up
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
//The state is a built-in React object that is used to contain data or information about the component.
// A component's state can change over time; whenever it changes, the component re-renders.
//props are read only, cannot  be modified
//states can be modified and also asynchoronous
//The state object is where you store property values that belong to the component.



//API
//An application programming interface is a way for two or more computer programs to communicate with each other. 
//It is a type of software interface, offering a service to other pieces of software.
//A document or standard that describes how to build or use such a connection or interface is called an API specification.