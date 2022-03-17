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
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4 mb-4">
        <NavLink className="navbar-brand" to="">
          <img
            src={Logo}
            alt=""
            className="logo"
            width="300px"
            height="50px"
          ></img>
        </NavLink>
        <div className="collapse navbar-collapse d-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item mx-4">
              <NavLink className="nav-link" to="" style={{ fontSize: 30 }}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link py-1" to="" style={{ fontSize: 30 }}>
                {" "}
                <FaUserGraduate />{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="" element={<Home />}>
          <Route path="scholarship" element={<Scholarship />}>
            <Route path="prenational" element={<Prenational />}></Route>
            <Route path="preintern" element={<Preintern />}></Route>
          </Route>
        </Route>
      </Routes>

      <div class="footer">
        <div>FAQ</div>
        <div>About us</div>
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
        <div>Contact</div>
        <div>Help</div>
      </div>
    </div>
  );
}

export default App;
