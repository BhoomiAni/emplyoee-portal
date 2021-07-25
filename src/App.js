import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PageLoader from "./components/page-loader";

import EmployeeDashboard from "./containers/EmployeeDashboard";
import LoginForm from "./containers/LoginForm";
import { getCookie, removeCookie, setCookie } from "./lib/session";
import { empList } from "./lib/userData";
import { getEmpList } from "./redux/action";

function App() {
  const [auth, setAuth] = useState();
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let auth = getCookie("Auth");
    setTimeout(() => {
      setAuth(auth ? auth : false);
      setLoader(false);
    }, 500);
  }, []);


  useEffect(() => {
    auth && dispatch(getEmpList(empList));
  }, [auth])

  const handleLogin = (value) => {
    setCookie("Auth", value);
    setAuth(value);
  }

  const handleLogout = () => {
    removeCookie("Auth");
    setAuth(false);
  }

  return (
    <div className="App">
      {loader ?
        <PageLoader loading={loader} color="grey" />
        :
        auth ? <EmployeeDashboard Logout={handleLogout} /> : <LoginForm Login={handleLogin} />}
    </div>
  );
}

export default App;
