import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

function AddRole() {
    let history = useHistory();
    const [role, setRole] = useState({
        name: "",
    });

    const { name } = role;
    
    const onInputChange = e => {
        setRole({ ...role, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/roles", role);
        history.push("/roles");
    };
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A Role</h2>
            <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Role"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
                />
            </div>
            <button className="btn btn-primary btn-block">Add Role</button>
            </form>
        </div>
        </div>
    );
}

export default AddRole
