import "./App.css";
import Preintern from "./components/preintern";
import Prenational from "./components/prenational";
import Scholarship from "./components/scholarship";
import { Routes, Route, Link, Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Scholarship />}>
          <Route path="prenational" element={<Prenational />}></Route>
          <Route path="preintern" element={<Preintern />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
