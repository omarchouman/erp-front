import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/************* Admins *************/
import Admins from "./Pages/Admins/Admins";
import AddAdmin from "./components/Admins/AddAdmin";
import EditAdmin from './components/Admins/EditAdmin';

/************* Employees *************/
import Employees from "./Pages/Employees/Employees";
import AddEmployee from "./components/Employees/AddEmployee";
import EditEmployee from "./components/Employees/EditEmployee";
import Employee from "./components/Employees/Employee";

/************* Teams *************/
import Teams from "./Pages/Teams/Teams";
import AddTeam from "./components/Teams/AddTeam";
import EditTeam from './components/Teams/EditTeam';

/************* Projects *************/
import Projects from "./Pages/Projects/Projects";
import AddProject from './components/Projects/AddProject';
import EditProject from "./components/Projects/EditProject";
import Project from "./components/Projects/Project";

/************* Roles *************/
import Roles from "./Pages/Roles/Roles";
import AddRole from "./components/Roles/AddRole";
import EditRole from "./components/Roles/EditRole";
import Role from "./components/Roles/Role";

/************* Kpis *************/
import Kpis from "./Pages/Kpis/Kpis";
import AddKpi from "./components/Kpis/AddKpi";
import EditKpi from "./components/Kpis/EditKpi";
import Kpi from "./components/Kpis/Kpi";

/************* Reports *************/
import Reports from "./Pages/Reports/Reports";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>

          {/* Admins */}
          <Route path='/admins' exact component={Admins} />
          <Route exact path="/admins/add" component={AddAdmin} />
          <Route exact path="/admins/edit/:id" component={EditAdmin} />
          
          {/* Employees */}
          <Route path='/employees' component={Employees} />
          <Route exact path="/employee/add" component={AddEmployee} />
          <Route exact path="/employee/edit/:id" component={EditEmployee} />
          <Route exact path="/employee" component={Employee} />

          {/* Teams */}
          <Route path='/teams' component={Teams} />
          <Route exact path="/team/add" component={AddTeam} />
          <Route exact path="/team/edit/:id" component={EditTeam} />

          {/* Projects */}
          <Route path='/projects' component={Projects} />
          <Route exact path="/project/add" component={AddProject} />
          <Route exact path="/project/edit/:id" component={EditProject} />
          <Route exact path="/project" component={Project} />

          {/* Roles */}
          <Route path='/roles' component={Roles} />
          <Route exact path="/role/add" component={AddRole} />
          <Route exact path="/role/edit/:id" component={EditRole} />
          <Route exact path="/role" component={Role} />

          {/* Kpis */}
          <Route path='/kpis' component={Kpis} />
          <Route exact path="/kpi/add" component={AddKpi} />
          <Route exact path="/kpi/edit/:id" component={EditKpi} />
          <Route exact path="/kpi" component={Kpi} />

          <Route path='/reports' component={Reports} />

        </Switch>
      </Router>
    </>
  );
}

export default App;