import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

function AssignProjects() {
    let history = useHistory();
    const [projectTeams, setProjectTeams] = useState({
        project_id: "",
        team_id: "",   
    });

    const [projectdata, setProjectData] = useState([]);
    const [teamdata, setTeamData] = useState([]);


    useEffect(() => {
        loadProjectData();
        loadTeamData();
    }, []);
    
    // Getting projects for dropdown
    const loadProjectData = async () => {
        const result = await axios.get("http://localhost:8000/api/allprojects");
        setProjectData(Array.from(result.data));
        console.log(result.data);
    };

    // Getting teams for dropdown
    const loadTeamData = async () => {
        const res = await axios.get("http://localhost:8000/api/allteams");
        setTeamData(Array.from(res.data));
        console.log(res.data);
    };

    const onInputChange = e => {
        console.log("Value", e);
        setProjectTeams({ ...projectTeams, e });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/pteams", projectTeams);
        history.push("/projects");
    };
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add Project-Teams</h2>
            <form onSubmit={e => onSubmit(e)}>
            <select
                className="dropdown"
                name="project"
                onChange={(e) => onInputChange(e.target.value)}
            >
                <option value={projectdata}>Select Project</option>
                {projectdata.map((vall) => (
                    <option value={vall.id}>{vall.name}</option>
                ))}
            </select>

            <br/><br/>

            <select
                className="dropdown"
                name="team"
                onChange={(e) => onInputChange(e.target.value)}
            >
                <option value={teamdata}>Select Team</option>
                {teamdata.map((vall) => (
                    <option value={vall.id}>{vall.name}</option>
                ))}
            </select>


            <br/><br/>
            <button className="btn btn-primary btn-block">Assign</button>
            </form>
        </div>
        </div>
    );
}

export default AssignProjects
