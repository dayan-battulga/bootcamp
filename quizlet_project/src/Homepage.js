import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";


class Homepage extends React.Component {


    render() {
        return (
            <div className="homepage">
                <div className="homepage-title">
                    <h1>Homepage</h1>
                </div>
                <div className="homepage-links">
                    <Link to="/editor" as="button">
                        <button>Go to editor</button>
                    </Link>
                    <Link to="/viewer" as="button">
                        <button> Go to viewer </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Homepage;