import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Teams() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
      loadTeams();
    }, []);
  
    const loadTeams = async () => {
      const result = await axios.get("http://localhost:8000/api/teams");
      setTeams(Array.from(result.data.data));
      console.log(result.data.data);
    };
  
    const deleteTeam = async id => {
      await axios.delete(`http://localhost:8000/api/teams/${id}`);
      loadTeams();
    };
  
    return (
      <div className="container">
        <div className="py-4">
          <h1>Teams Table</h1>
          <Link className="btn btn-outline-primary" to="/team/add">Add Team</Link>
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{team.name}</td>
                  <td>
                    <Link class="btn btn-primary mr-2" to={`/teams/${team.id}`}>
                      View
                    </Link>
                    <Link
                      class="btn btn-outline-primary mr-2"
                      to={`/team/edit/${team.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteTeam(team.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Teams
