import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Admins() {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
      loadAdmins();
    }, []);
  
    const loadAdmins = async () => {
      const result = await axios.get("http://localhost:8000/api/admins");
      setAdmins(Array.from(result.data.data));
      console.log(result.data.data);
    };
  
    const deleteAdmin = async id => {
      await axios.delete(`http://localhost:8000/api/admins/${id}`);
      loadAdmins();
    };
  
    return (
      <div className="container">
        <div className="py-4">
          <h1>Admins Table</h1>
          <Link className="btn btn-outline-primary" to="/admins/add">Add Admin</Link>
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>
                    {/* <Link class="btn btn-primary mr-2" to={`/admins/${admin.id}`}>
                      View
                    </Link> */}
                    <Link
                      class="btn btn-outline-primary mr-2"
                      to={`/admins/edit/${admin.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteAdmin(admin.id)}
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

export default Admins
