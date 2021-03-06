import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function EditAdmin() {
    let history = useHistory();
    const { id } = useParams();
    const [admin, setAdmin] = useState({
      name: "",
      email: "",
      password: "",
    });
  
    const { name, email, password } = admin || {};
    const onInputChange = e => {
      setAdmin({ ...admin, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      loadAdmin();
    }, []);
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:8000/api/admins/${id}`, admin);
      history.push("/admins");
    };
  
    const loadAdmin = async () => {
      const result = await axios.get(`http://localhost:8000/api/admins/${id}`);
      setAdmin(result.data.data);
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit An Admin</h2>
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
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter Your Password Please"
                name="password"
                value={password}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-warning btn-block">Update Admin</button>
          </form>
        </div>
      </div>
    );
}

export default EditAdmin
