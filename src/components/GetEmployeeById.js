import React, { useState } from "react";

const GetEmployeeById = () => {
    const [id, setId] = useState("");
    const [employee, setEmployee] = useState(null);
    const [error, setError] = useState("");

    const fetchEmployee = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/employees/${id}`);
            if (!response.ok) throw new Error("Employee not found");
            const data = await response.json();
            setEmployee(data);
            setError("");
        } catch (err) {
            setEmployee(null);
            setError(err.message);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Get Employee by ID</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Employee ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button className="btn btn-primary mt-3" onClick={fetchEmployee}>Fetch</button>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {employee && (
                <div className="card mt-4">
                    <div className="card-body">
                        <h5>{employee.firstName} {employee.lastName}</h5>
                        <p>Email: {employee.email}</p>
                        <p>ID: {employee.id}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetEmployeeById;
