
import { BrowserRouter } from "react-router-dom";
import Forgot from "./pages/ForgotPage/ForgotPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import Register from "./pages/RegisterPage/RegisterPage.jsx";
import Hooks from "./playground/HooksGeneral.jsx";
import UseState from "./playground/UseState.jsx";


import { Route, Routes } from "react-router-dom";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/UseState" element={<UseState />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
