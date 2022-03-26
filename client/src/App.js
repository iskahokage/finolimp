import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Application from "./Pages/Application-form"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route element={Application} path='/sign-up' exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
