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
                  National Level Scholarships
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="preintern">
                  International Level Scholarships
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
