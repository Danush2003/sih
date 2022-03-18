import "./App.css";
import Preintern from "./components/preintern";
import Prenational from "./components/prenational";
import Scholarship from "./components/scholarship";
import Home from "./components/Home";
import { FaUserGraduate } from "react-icons/fa";
import Logo from "./images/Logo.png";
import { Routes, Route, Link, Router, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 mb-2">
        <NavLink className="navbar-brand mx-2" to="">
          <img
            src={Logo}
            alt=""
            className="logo"
            width="200px"
            height="30px"
          ></img>
        </NavLink>
        <div className="collapse navbar-collapse d-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item mx-4">
              <NavLink className="nav-link" to="" style={{ fontSize: 20 }}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link py-1" to="" style={{ fontSize: 20 }}>
                {" "}
                <FaUserGraduate />{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="scholarship" element={<Scholarship />}>
          <Route path="prenational" element={<Prenational />}></Route>
          <Route path="preintern" element={<Preintern />}></Route>
        </Route>
      </Routes>

      <div class="footer">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1034/1034182.png"
            style={{ width: "30px" }}
          ></img>
          <h5 style={{ display: "inline", margin: "3px", color: "black" }}>
            1278349567
          </h5>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3179/3179068.png"
            style={{ width: "30px" }}
          ></img>
          <h5 style={{ display: "inline", margin: "3px", color: "black" }}>
            Mumbai,India
          </h5>
        </div>
        <div>
          <img
            src="https://cdn-icons.flaticon.com/png/512/2099/premium/2099199.png?token=exp=1647631797~hmac=35f53057385074707f7a2f8081dfc5e6"
            style={{ width: "30px" }}
          ></img>
          <h5 style={{ display: "inline", margin: "3px", color: "black" }}>
            brucewayne@gmail.com
          </h5>
        </div>
      </div>
    </div>
  );
}

export default App;
