import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import GetEmployeeById from "./components/GetEmployeeById";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Employee Management</Link>
                <div>
                    <Link className="nav-link text-light d-inline me-3" to="/">Home</Link>
                    <Link className="nav-link text-light d-inline me-3" to="/add">Add Employee</Link>
                    <Link className="nav-link text-light d-inline" to="/get-by-id">Get Employee By ID</Link>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/update/:id" element={<UpdateEmployee />} />
            <Route path="/get-by-id" element={<GetEmployeeById />} />
        </Routes>
    </Router>
);

export default App;
