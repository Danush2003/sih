import React from "react";
import { Outlet, Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import preintern from "./preintern";
import prenational from "./prenational";

function scholarship() {
  return (
    <div className="container ">
      <div className="row">
        <div className=" filter col-sm-3">
          <h1>Filters:</h1>
          <hr />

          <h2>Annual Income:</h2>
          <input
            className="mt-2"
            type="radio"
            name="income"
            id="below 2"
          ></input>
          <label className="mt-2" htmlFor="below 2">
            Less than 2 lakhs
          </label>
          <br />
          <input
            className="mt-2"
            type="radio"
            name="income"
            id="2 to 5"
          ></input>
          <label className="mt-2" htmlFor="2 to 5">
            between 2 lakhs and 5 lakhs
          </label>
          <br></br>
          <input
            className="mt-2"
            type="radio"
            name="income"
            id="greater than 5"
          ></input>
          <label className="mt-2" htmlFor="greater than 5">
            greater than 5 lakhs
          </label>
          <hr />
          <input type="checkbox" id="pd"></input>
          <label className="m-2" htmlFor="pd">
            {" "}
            Physically Disabled
          </label>
          <hr />
          <h2>Caste</h2>
          <input className="m-2" type="checkbox" id="bc"></input>
          <label htmlFor="bc"> OBC</label>
          <input className="m-2" type="checkbox" id="scst"></input>
          <label htmlFor="scst"> SC/ST</label>
          <input className="m-2" type="checkbox" id="others"></input>
          <label htmlFor="others"> Other</label>
          <hr />
          <h2>Gender</h2>
          <input className="m-2" type="checkbox" id="male"></input>
          <label htmlFor="male"> Male</label>
          <input className="m-2" type="checkbox" id="female"></input>
          <label htmlFor="female"> Female</label>
          <input className="m-2" type="checkbox" id="others"></input>
          <label htmlFor="others"> Others</label>
          <hr />
          <h2>Type</h2>
          <input className="m-2" type="checkbox" id="male"></input>
          <label htmlFor="male"> Government</label>
          <input className="m-2" type="checkbox" id="female"></input>
          <label htmlFor="female"> Private</label>
        </div>
        <div className="col-sm-9">
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
