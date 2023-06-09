//# 63 64
/*import React from "react";

const Home = () => {
    return (
        <>
            <div className="setStyle">
                <h1>Home Page</h1>
                <p>Welcome to my world</p>
            </div>
        </>
    );
};

export default Home;

//#67 1
import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/logo.png";

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">

                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>  Grow your business with
                                        <strong className="brand-name"> DharmTechnical</strong></h1>

                                    <h2 className="my-3"> We are the team of talented developer making websites</h2>

                                    <div className="mt-3">
                                        <NavLink to="/service" className="btn-get-started">Get Started</NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} className="img-fluid animated" alt="home img" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;*/

//#67 2
import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/server.jpeg";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name="Grow your business with"
                imgsrc={web}
                visit="/service"
                btname="Get Started"
            />
        </>
    );
};

export default Home;