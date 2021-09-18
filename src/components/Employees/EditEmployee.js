import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function EditEmployee() {
    let history = useHistory();
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        first_name: "",
        last_name: "",
        email: "", 
        phone: "",  
        image: "",
    });
  
    const { fName, lName, email, phone, image } = employee;
    const onInputChange = e => {
      setEmployee({ ...employee, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      loadEmployee();
    }, []);
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:8000/api/employees/${id}`, employee);
      history.push("/employees");
    };
  
    const loadEmployee = async () => {
      const result = await axios.get(`http://localhost:8000/api/employees/${id}`);
      setEmployee(result.data.data);
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit An Employee</h2>
          <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter First Name"
                name="fname"
                value={fName}
                onChange={e => onInputChange(e)}
                />
            </div>
            <div className="form-group">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Last Name"
                name="lname"
                value={lName}
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
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Phone Number"
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
                />
            </div>
            <div className="form-group">
                <input
                type="file"
                className="form-control form-control-lg"
                placeholder="Upload Image"
                name="image"
                value={image}
                onChange={e => onInputChange(e)}
                />
            </div>
            <button className="btn btn-warning btn-block">Update Employee</button>
          </form>
        </div>
      </div>
    );
}

export default EditEmployee
