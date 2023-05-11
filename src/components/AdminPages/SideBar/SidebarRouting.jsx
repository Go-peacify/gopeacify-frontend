import React from "react";
import SideBar from "./SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Queries from "../Queries";
import Issue from "../Issues";
import IssueCategory from "../IssueCategory";
import Users from "../Users";
import Questions from "../Questions";
import Blog from "../Blogs";

const SidebarRouting = () => {
  return (
        <SideBar>
        <Routes>
          {/* <Route exact path="doctors" element={""}/> */}
          <Route exact path="adminqueries" element={<Queries/>}/>
          <Route exact path="adminissues" element={<Issue/>}/>
          <Route exact path="adminissuecategory" element={<IssueCategory/>}/>
          <Route exact path="adminusers" element={<Users/>}/>
          <Route exact path="adminquestions" element={<Questions/>}/>
          <Route exact path="adminblogs" element={<Blog/>}/>
        </Routes>
      </SideBar>
  );
};

export default SidebarRouting;
