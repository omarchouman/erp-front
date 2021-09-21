import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";


function EditRole() {
    let history = useHistory();
    const { id } = useParams();
    const [role, setRole] = useState({
      name: "",
    });
  
    const { name, } = role || {};
    const onInputChange = e => {
      setRole({ ...role, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      loadRoles();
    }, []);
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:8000/api/roles/${id}`, role);
      history.push("/roles");
    };
  
    const loadRoles = async () => {
      const result = await axios.get(`http://localhost:8000/api/roles/${id}`);
      setRole(result.data.data);
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A Role</h2>
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
            <button className="btn btn-warning btn-block">Update Role</button>
          </form>
        </div>
      </div>
    );
}

export default EditRole
