import "./login.css";
import React, { useState } from "react";
import LoginForm from "./LoginForm";


export default function App() {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    <div className="App">
      <LoginForm isShowLogin={isShowLogin} />
    </div>
  );
}
