import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./SideBar.css";

const routes = [
  {
    path: "admindoctors",
    name: "Doctors",
  },
  {
    path: "adminqueries",
    name: "Queries",
  },
  {
    path: "adminissues",
    name: "Issues",
  },

  {
    path: "adminissuecategory",
    name: "Issue Category",
  },
  {
    path: "adminusers",
    name: "Users",
  },
  {
    path: "adminquestions",
    name: "Questions",
  },
  {
    path: "adminblogs",
    name: "Blogs",
  },
];

const SideBar = ({ children }) => {
  return (
    <div className="main-container flex flex-row ">
      <div className="sidebar ">
        <section className="routes">
          {routes.map((route, index) => {
            return (
              <NavLink
                to={route.path}
                key={index}
                className="link"
                activeClassName="active"
                title={route.name}
              >
                <div className="link_text">{route.name}</div>
              </NavLink>
            );
          })}
        </section>
      </div>
      <main
        style={{
          width: "95%",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default SideBar;
