import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Admins() {
    const [users, setUser] = useState([]);

    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:8000/api/admins");
      setUser(Array.from(result.data.data));
      console.log(result.data.data);
    };
  
    const deleteUser = async id => {
      await axios.delete(`http://localhost:8000/api/admins/${id}`);
      loadUsers();
    };
  
    return (
      <div className="container">
        <div className="py-4">
          <h1>Admins Table</h1>
          <Link className="btn btn-outline-primary" to="/admins/add">Add User</Link>
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
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link class="btn btn-primary mr-2" to={`/admins/${user.id}`}>
                      View
                    </Link>
                    <Link
                      class="btn btn-outline-primary mr-2"
                      to={`/admins/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
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
