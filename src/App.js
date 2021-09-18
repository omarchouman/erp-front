import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Admins from "./Pages/Admins/Admins";
import AddAdmin from "./components/Admins/AddAdmin";
import EditAdmin from './components/Admins/EditAdmin';
import Admin from './components/Admins/Admin';

import Employees from "./Pages/Employees/Employees";
import AddEmployee from "./components/Employees/AddEmployee";
import EditEmployee from "./components/Employees/EditEmployee";

import Teams from "./Pages/Teams/Teams";


import Projects from "./Pages/Projects/Projects";
import Roles from "./Pages/Roles/Roles";
import Kpis from "./Pages/Kpis/Kpis";
import Reports from "./Pages/Reports/Reports";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/admins' exact component={Admins} />
          <Route exact path="/admins/add" component={AddAdmin} />
          <Route exact path="/admins/edit/:id" component={EditAdmin} />
          <Route exact path="/admins/:id" component={Admin} />

          <Route path='/employees' component={Employees} />
          <Route exact path="/employees/add" component={AddEmployee} />
          <Route exact path="/employees/edit/:id" component={EditEmployee} />

          <Route path='/teams' component={Teams} />
          <Route path='/projects' component={Projects} />
          <Route path='/roles' component={Roles} />
          <Route path='/kpis' component={Kpis} />
          <Route path='/reports' component={Reports} />
        </Switch>
      </Router>
    </>
  );
}

export default App;