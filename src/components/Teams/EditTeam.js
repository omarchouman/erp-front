import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function EditTeam() {
    let history = useHistory();
    const { id } = useParams();
    const [team, setTeam] = useState({
      name: "",
    });
  
    const { name } = team || {};
    const onInputChange = e => {
      setTeam({ ...team, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      loadTeam();
    }, []);
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:8000/api/teams/${id}`, team);
      history.push("/teams");
    };
  
    const loadTeam = async () => {
      const result = await axios.get(`http://localhost:8000/api/teams/${id}`);
      setTeam(result.data.data);
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A Team</h2>
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
            <button className="btn btn-warning btn-block">Update Admin</button>
          </form>
        </div>
      </div>
    );
}

export default EditTeam
