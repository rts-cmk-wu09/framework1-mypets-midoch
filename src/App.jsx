import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [context, setContext] = useState({});

  return (
    <>
      {/* <AuthContext.Provider value={auth}> */}
      <Outlet context={[context, setContext]} />

      {/* </AuthContext.Provider> */}
    </>
  );
}

export default App;
