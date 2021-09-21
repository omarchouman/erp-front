import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      loadProjects();
    }, []);
  
    const loadProjects = async () => {
      const result = await axios.get("http://localhost:8000/api/projects");
      setProjects(Array.from(result.data.data));
      console.log(result.data.data);
    };
  
    const deleteProject = async id => {
      await axios.delete(`http://localhost:8000/api/projects/${id}`);
      loadProjects();
    };
  
    return (
      <div className="container">
        <div className="py-4">
          <h1>Projects Table</h1>
          <Link className="btn btn-outline-primary" to="/project/add">Add Project</Link>
          <Link className="btn btn-outline-primary" to="/assignp">Assign Projects to Teams</Link>
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{project.name}</td>
                  <td>
                    <Link class="btn btn-primary mr-2" to={"/project"}>
                      View
                    </Link>
                    <Link
                      class="btn btn-outline-primary mr-2"
                      to={`/project/edit/${project.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteProject(project.id)}
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

export default Projects
