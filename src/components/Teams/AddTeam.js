import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

function AddTeam() {
    let history = useHistory();
    const [team, setTeam] = useState({
        name: "",
    });

    const { name } = team;
    const onInputChange = e => {
        setTeam({ ...team, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/teams", team);
        history.push("/teams");
    };
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A Team</h2>
            <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Team Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
                />
            </div>
            <button className="btn btn-primary btn-block">Add Team</button>
            </form>
        </div>
        </div>
    );
}

export default AddTeam
