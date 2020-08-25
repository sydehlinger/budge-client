import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

export default () => (
    <React.Fragment>
        <Router>
            <NavigationBar />
        </Router>
    </React.Fragment>
);