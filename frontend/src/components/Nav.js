import React from "react";
import { Link } from "react-router-dom";

const downloadCSVHandler = () => {
  fetch("http://localhost:8080/feed/getcsv")
    .then((result) => {
      if (result.status !== 200) {
        throw new Error("Could not fetch Items from inventory");
      }
    })
    .catch((err) => {
      throw err;
    });
};

const Nav = (props) => {
  return (
    <nav>
      <button>
        <span></span>
      </button>
      <div>
        <div>
          <Link to="/createitem" onClick={props.setcreate}>
            Create Item
          </Link>
        </div>
        <div>
          <Link to="/getcsvdata" onClick={downloadCSVHandler}>
            Click to download CSV file
          </Link>
        </div>
        <div>
          <Link to="/viewitems" onClick={props.setView}>
            View Items
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
