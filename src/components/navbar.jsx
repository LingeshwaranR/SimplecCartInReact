import React from "react";

const NavBar = ({totalCounters}) => {
        console.log("NavBar-Rendered");
     return (
      <nav className='navbar navbar-light bg-light'>
        <a className="navbar-brand" href="http://wwww.lingeshwaranr.ml">
          Items In Cart{" "}
          <span className='badge badge-pill badge-secondary'>
            {totalCounters}
          </span>
        </a>
      </nav>
    );
};


export default NavBar;
