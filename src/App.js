import "./App.css";
import Mycity from "./basic/city";
import Mycompany from "./basic/company";
import Myemployee from "./basic/employee";
import Mycustomer from "./basic/customer";
import Myitem from "./basic/item";
import { HashRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <nav className="navbar">
        <ul className="nav-list " id="works">
          <li className="navlist">
            <Link to="/">City</Link>
            <Link to="/company">Company</Link>
            <Link to="/employee">Employee Details</Link>
            <Link to="/customer">Customer Details</Link>
            <Link to="/item">Item</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Mycity />} />
          <Route path="/company" element={<Mycompany />} />
          <Route path="/employee" element={<Myemployee />} />
          <Route path="/customer" element={<Mycustomer />} />
          <Route path="/item" element={<Myitem />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
