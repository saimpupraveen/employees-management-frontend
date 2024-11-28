import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FormStyles.module.css";

const AddEmployee = () => {
    const [employee, setEmployee] = useState({ firstName: "", lastName: "", email: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:8080/api/employees", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employee),
        });
        navigate("/");
    };

    return (
        <div className={styles.formContainer}>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className={styles.formButton}>Save</button>
            </form>
        </div>
    );
};

export default AddEmployee;
