import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

function AddProject() {
    let history = useHistory();
    const [project, setProject] = useState({
        name: "",   
    });

    const [teamdata, setTeamData] = useState([]);


    useEffect(() => {
        loadTeamData();
      }, []);
    
      const loadTeamData = async () => {
        const result = await axios.get("http://localhost:8000/api/teams");
        setTeamData(Array.from(result.data.data));
        console.log(result.data.data);
      };

    const { name } = project;
    const onInputChange = e => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/projects", project);
        history.push("/");
    };
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A Project</h2>
            <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
                />
            </div>

            <br/><br/>

            <select
                className="dropdown"
                name="team"
                onChange={(e) => setTeamData(e.target.value)}
            >
                <option value="A">Select Team</option>
                {teamdata.map((vall) => (
                    <option value={vall.id}>{vall.name}</option>
                ))}
            </select>


            <br/><br/>
            <button className="btn btn-primary btn-block">Add Project</button>
            </form>
        </div>
        </div>
    );
}

export default AddProject
