import React from "react";
import "./Home.css"; // Import custom CSS for additional styling

const Home = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="home-header text-white text-center">
                <h1 className="display-4">Welcome to the Employee Management System</h1>
                <p className="lead mt-3">
                    Manage your organization's employees efficiently with our easy-to-use system.
                </p>
            </div>

            {/* Features Section */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <h5 className="card-title">Add Employee</h5>
                                <p className="card-text">
                                    Add new employees to your organization with their details.
                                </p>
                                <a href="/add" className="btn btn-primary">
                                    Add Employee
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <h5 className="card-title">View Employee List</h5>
                                <p className="card-text">
                                    View all employees and their details in one place.
                                </p>
                                <a href="/employee-list" className="btn btn-success">
                                    View Employees
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <h5 className="card-title">Search Employee</h5>
                                <p className="card-text">
                                    Search for an employee by their unique ID.
                                </p>
                                <a href="/get-by-id" className="btn btn-info">
                                    Search Employee
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <p className="text-muted">
                        This project is built using <strong>React</strong>, <strong>React Router</strong>, and <strong>Bootstrap</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;