import "./App.css";
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";

import DashboardPage from "../src/pages/dashboard/dashboard"

import Dashboard from "./Admin/Dashboard"
import Overview from "./Admin/Overview/Index"
import OverAdd from "./Admin/Overview/Add"
import OverProgres from "./Admin/Overview/Progres"
import Ideas from "./Admin/Ideas/index"
import Login from "./Auth/Login";
import Agents from "./Admin/Agents/Index"
import AgentAdd from "./Admin/Agents/Add"
import AgentEdit from "./Admin/Agents/Edit"
import Speed from "./Components/SpedoMeter";
import Register from "./Auth/Register";
import ForgotPass from "./Auth/ForgotPass"



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="dashboard"></Navigate>} />
        <Route exact path="/dashboard" element={<DashboardPage></DashboardPage>}></Route>

        {/* <Route path="/Speed" element={<Speed />} />   

        <Route path="/overview" element={<Overview />} />
        <Route path="/overview/add" element={<OverAdd />} />
        <Route path="/overview/progres" element={<OverProgres />} />

        <Route path="/ideas" element={<Ideas />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/add" element={<AgentAdd />} />
        <Route path="/agents/edit" element={<AgentEdit />} />

        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot-password" element={<ForgotPass/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
