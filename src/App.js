import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import Home from "./components/Home";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import GetEmployeeById from "./components/GetEmployeeById";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import custom CSS for header styling

const App = () => (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-dark custom-header">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">Employee Management</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link text-light me-3" to="/">Home</Link>
                        <Link className="nav-link text-light me-3" to="/add">Add Employee</Link>
                        <Link className="nav-link text-light me-3" to="/get-by-id">Get Employee By ID</Link>
                        <Link className="nav-link text-light" to="/employee-list">Show Employee List</Link>
                    </div>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} /> {/* Set Home as the default route */}
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/update/:id" element={<UpdateEmployee />} />
            <Route path="/get-by-id" element={<GetEmployeeById />} />
            <Route path="/employee-list" element={<EmployeeList />} /> {/* Add route for EmployeeList */}
        </Routes>
    </Router>
);

export default App;