import { Route, Routes } from "react-router-dom"

import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Produtos from "./pages/Produtos.jsx"
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>

      <Route
      path="/dashboard"
      element={<Dashboard />}
      />

      <Route
       path="/produtos"
       element={<Produtos />}
       />
    </Routes>
  );
}

export default App;