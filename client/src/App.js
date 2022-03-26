import {BrowserRouter, Routes, Route } from "react-router-dom"
import Application from "./Pages/Application-form"
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route element={<Application/>} path='/sign-up' exact/>
            <Route element={<Login/>} path='/sign-in' exact/>
            <Route element={<Profile/>} path='/profile' exact/>
            <Route element={<AboutUs/>} path='/' exact/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
