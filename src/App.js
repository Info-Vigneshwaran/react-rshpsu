// src/App.js

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
import TodoApp from "./TodoApp";
import CoundownTimer from "./CountdownTimer";


const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={() =>
                 navigate("/contact")}>Go to Contact</button>
        </div>
    );
};



const Contact = () => <h2>Contact Page</h2>;
const Team = () => <h2>Team Page</h2>;
const Company = () => <h2>Company Page</h2>;

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/todo">Todo</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/coundowntimer">Countdown Timer</Link>
                    </li>
                    
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />z
                
                <Route path="/contact" element={<Contact />} />
                <Route path="/todo" element={<TodoApp />} />
                <Route path="/coundowntimer" element={<CoundownTimer />} />
            </Routes>
        </Router>
    );
}

export default App;
