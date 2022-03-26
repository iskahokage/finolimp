import {BrowserRouter, Routes, Route } from "react-router-dom"
import Application from "./Pages/Application-form"
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import AboutUs from "./Pages/AboutUs";
import News from "./Pages/News";
import NewsDetails from "./Pages/NewsDetails";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route element={<Application/>} path='/sign-up' exact/>
            <Route element={<Login/>} path='/sign-in' exact/>
            <Route element={<Profile/>} path='/profile' exact/>
            <Route element={<AboutUs/>} path='/' exact/>
            <Route element={<News/>} path='/news' exact/>
            <Route element={<NewsDetails/>} path='/news-details' exact/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
