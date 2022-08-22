import React, { children } from "react";
import Navigation from "../Navigation";

const Layout = ({ children }) => (
  <div className="App">
    <Navigation />
    {children}
  </div>
);

export default Layout;
