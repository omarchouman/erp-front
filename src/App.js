import { Route, Switch, useLocation, Redirect } from "react-router";
import Login from "./components/Login/login";
import Sidebar from "./components/Sidebar/Sidebar";
import Admins from "./Pages/Admins/Admins";
import Employees from "./Pages/Employees/Employees";
import Teams from "./Pages/Teams/Teams";
import Projects from "./Pages/Projects/Projects";
import Kpis from "./Pages/Kpis/Kpis";
import Reports from "./Pages/Reports/Reports";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if(token) {
      setRedirect("/Admins")
    } else {
      setRedirect("/login")
    }
  }, []);

  const redirectFunction = () => redirect && <Redirect to={redirect} />; 

  return (
    <>
      <Route exact path="/login" component={Login} />
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          {redirectFunction}
          <Switch location={location} key={location.pathname}>
            
            <Route exact path="/admins" component={Admins} />
            <Route path="/employees" component={Employees} />
            <Route path="/teams" component={Teams} />
            <Route path="/projects" component={Projects} />
            <Route path="/kpis" component={Kpis} />
            <Route path="/reports" component={Reports} />
            
          </Switch>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
