import { React } from "react";
import "./w3.css";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import About from "./Components/Index/About";
import Training from "./Components/Index/Training";
import Introduction from "./Components/Index/Introduction";
import Index from "./Components/Index/Index";
import TopNavigation from "./Components/Misc/TopNavigation";
import NotFoundError from "./Components/Misc/NotFoundError";



function App() {
    return (
        <>
            <Router>
                <div>
                    <TopNavigation />
                </div>
                <Routes>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/training" element={<Training/>}/>
                    <Route exact path="/introduction" element={<Introduction/>}/>
                    <Route exact path="/" element={<Index/>}/>
                    <Route path="*" element={<NotFoundError/>}/>
                </Routes>
                <div>
                    {/* DEVELOPERS NOTE: Mobile tab-bar menu can go here */}
                </div>
            </Router>
        </>
    );
}

export default App;
