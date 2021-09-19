import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      loadEmployees();
    }, []);
  
    const loadEmployees = async () => {
      const result = await axios.get("http://localhost:8000/api/employees");
      setEmployees(Array.from(result.data.data));
      console.log(result.data.data);
    };
  
    const deleteEmployee = async id => {
      await axios.delete(`http://localhost:8000/api/employees/${id}`);
      loadEmployees();
    };
  
    return (
      <div className="container">
        <div className="py-4">
          <h1>Employees Table</h1>
          <Link className="btn btn-outline-primary" to="/employee/add">Add Employee</Link>
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Avatar</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{employee.first_name}</td>
                  <td>{employee.last_name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>
                  <img
                      style={{ width: 30, height: 30 , borderRadius:'50%', borderColor:'#1dc4e7'}}
                      src={"http://localhost:8000/" + employee.file_path} />
                  </td>
                  <td>
                    <Link class="btn btn-primary mr-2" to={`/employee/${employee.id}`}>
                      View
                    </Link>
                    <Link
                      class="btn btn-outline-primary mr-2"
                      to={`/employee/edit/${employee.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteEmployee(employee.id)}
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

export default Employees
