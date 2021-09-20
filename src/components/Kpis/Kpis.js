import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Kpis() {
    const [kpis, setKpis] = useState([]);

    useEffect(() => {
      loadKpis();
    }, []);
  
    const loadKpis = async () => {
      const result = await axios.get("http://localhost:8000/api/kpis");
      setKpis(Array.from(result.data.data));
      console.log(result.data.data);
    };
  
    const deleteKpi = async id => {
      await axios.delete(`http://localhost:8000/api/kpis/${id}`);
      loadKpis();
    };
  
    return (
      <div className="container">
        <div className="py-4">
          <h1>Kpis Table</h1>
          <Link className="btn btn-outline-primary" to="/admins/add">Add Admin</Link>
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Employee</th>
                <th scope="col">Value</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {kpis.map((kpi, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{kpi.name}</td>
                  {/* <td>{kpi.employee.pivot.level}</td> */}
                  <td>
                    {/* <Link class="btn btn-primary mr-2" to={`/admins/${admin.id}`}>
                      View
                    </Link> */}
                    <Link
                      class="btn btn-outline-primary mr-2"
                      to={`/kpis/edit/${kpi.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteKpi(kpi.id)}
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

export default Kpis
