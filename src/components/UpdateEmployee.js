import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./FormStyles.module.css"; // Import CSS module

const UpdateEmployee = () => {
    const [employee, setEmployee] = useState({ firstName: "", lastName: "", email: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { id } = useParams(); // Retrieve employee ID from the URL

    useEffect(() => {
        const fetchEmployeeById = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employees/${id}`);
                if (!response.ok) {
                    throw new Error("Employee not found");
                }
                const data = await response.json();
                setEmployee(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchEmployeeById();
    }, [id]); // Add 'id' as a dependency

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/employees/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(employee),
            });

            if (!response.ok) {
                throw new Error("Failed to update employee");
            }

            navigate("/employee-list");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2>Update Employee</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleUpdate}>
                <label className={styles.formLabel}>First Name</label>
                <input
                    type="text"
                    className={styles.formInput}
                    value={employee.firstName}
                    onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
                />
                <label className={styles.formLabel}>Last Name</label>
                <input
                    type="text"
                    className={styles.formInput}
                    value={employee.lastName}
                    onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
                />
                <label className={styles.formLabel}>Email</label>
                <input
                    type="email"
                    className={styles.formInput}
                    value={employee.email}
                    onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                />
                <button type="submit" className={styles.formButton}>
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateEmployee;