import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

function AddEmployee() {

    let history = useHistory();
    const [employee, setEmployee] = useState({
        first_name: "",
        last_name: "",
        email: "", 
        phone: "",  
        image: "",
        team_id: "",
        role_id: "",
    });

    const [image, setImage] = useState("")
    const [teamdata, setTeamData] = useState([]);
    const [roledata, setRoleData] = useState([]);

    useEffect(() => {
        loadTeamData();
        loadRoleData();
    }, []);

    const { fName, lName, email, phone, team_id, role_id } = employee;

    // Getting all teams for dropdown
    const loadTeamData = async () => {
        const res = await axios.get("http://localhost:8000/api/allteams");
        setTeamData(res.data);
        console.log(res.data);
    }

    // Getting all roles for dropdown
    const loadRoleData = async () => {
        const res = await axios.get("http://localhost:8000/api/allroles");
        setRoleData(res.data);
        console.log(res.data);
    }

    const onInputChange = e => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const onImageChange = e => {
        setImage(e.target.files[0]);
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/employees", employee);
        history.push("/employees");
    };
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add An Employee</h2>
            <form  onSubmit={e => onSubmit(e)} enctype="multipart/form-data">
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
                onChange={e => onImageChange(e)}
                />
            </div>
            <br/><br/>
            <select
                className="dropdown"
                name="team"
                onChange={(e) => onInputChange(e)}
            >
                <option value={team_id}>Select Team</option>
                {teamdata && teamdata.map((vall) => (
                    <option value={vall.id}>{vall.name}</option>
                ))}
            </select>
            <br/><br/>
            <select
                className="dropdown"
                name="role"
                onChange={(e) => onInputChange(e)}
            >
                <option value={role_id}>Select Role</option>
                {roledata && roledata.map((vall) => (
                    <option value={vall.id}>{vall.name}</option>
                ))}
            </select>
            <br/><br/>
            <button className="btn btn-primary btn-block">Add Employee</button>
            </form>
        </div>
        </div>
  );
}

export default AddEmployee
