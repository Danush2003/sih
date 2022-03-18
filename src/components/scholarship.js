import React from "react";
import { Outlet, Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import preintern from "./preintern";
import prenational from "./prenational";

function scholarship() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col">
          <div className="pills">
            <ul className=" list nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="prenational">
                  <h2>National Level Scholarships</h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="preintern">
                  <h2>International Level Scholarships</h2>
                </Link>
              </li>
            </ul>

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
export default scholarship;
