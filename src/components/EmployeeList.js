import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./EmployeeList.module.css"; // Import your styles

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const navigate = useNavigate();

    // Fetch all employees from the backend
    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await fetch("http://localhost:8080/api/employees");
        const data = await response.json();
        setEmployees(data);
    };

    // Handle edit navigation
    const handleEdit = (id) => {
        navigate(`/update/${id}`); // Navigate to UpdateEmployee component with ID
    };

    // Handle delete functionality
    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this employee?");
        if (confirm) {
            await fetch(`http://localhost:8080/api/employees/${id}`, {
                method: "DELETE",
            });
            fetchEmployees(); // Refresh the employee list
        }
    };

    return (
        <div className="container">
            <h2 className={styles.title}>Employee List</h2>
            <Link to="/add" className={styles.addButton}>
                Add Employee
            </Link>
            <div className={styles.tableContainer}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                                <td className={styles.actionButtons}>
                                    <button
                                        className="btn btn-warning btn-sm"
                                        onClick={() => handleEdit(emp.id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(emp.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;
