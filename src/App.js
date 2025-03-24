import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
// import TaskBoard from "./pages/TaskBoard";
import Register from './Components/Register';
// import { Dashboard } from "@mui/icons-material";
import Dashboard from "./Pages/Dashboard";
import './App.css'


function App() {
    return (
        

        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login/>}/>

            </Routes>
        </Router>
    

    );
}

export default App;