import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getAllByTitle } from "@testing-library/dom";

function Roles() {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
      loadRoles();
    }, []);
  
    const loadRoles = async () => {
      const result = await axios.get("http://localhost:8000/api/roles");
      setRoles(Array.from(result.data.data));
      console.log(result.data.data);
    };

   
  
    const deleteRole = async id => {
      await axios.delete(`http://localhost:8000/api/admins/${id}`);
      loadRoles();
    };
  
    return (
      <div className="container">
        <div className="py-4">
          <h1>Roles Table</h1>
          <Link className="btn btn-outline-primary" to="/roles/add">Add Role</Link>
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Employees</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{role.name}</td>
                  <td>{role.employees[0].first_name}</td>
                  <td>
                    <Link class="btn btn-primary mr-2" to={`/roles/${role.id}`}>
                      View
                    </Link>
                    <Link
                      class="btn btn-outline-primary mr-2"
                      to={`/roles/edit/${role.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteRole(role.id)}
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

export default Roles
