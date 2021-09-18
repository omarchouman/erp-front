import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Admin() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });
      const { id } = useParams();
      useEffect(() => {
        loadUser();
      }, []);
      const loadUser = async () => {
        const res = await axios.get(`http://localhost:8000/api/admins/${id}`);
        setUser(res.data);
      };
      return (
        <div className="container py-4">
          <Link className="btn btn-primary" to="/">
            back to Home
          </Link>
          <h1 className="display-4">User Id: {id}</h1>
          <hr />
          <ul className="list-group w-50">
            <li className="list-group-item">name: {user.name}</li>
            <li className="list-group-item">email: {user.email}</li>
            <li className="list-group-item">phone: {user.password}</li>
          </ul>
        </div>
      );
}

export default Admin
