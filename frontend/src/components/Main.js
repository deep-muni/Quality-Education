import React, {useEffect} from 'react';
import {Link, useHistory, withRouter} from "react-router-dom";
import logo from "../img/logo.png";
import deepmuni from "../img/deepmuni.jpg";
import dhruvtarpara from "../img/dhruvtarpara.jpg";
import simrandiwan from "../img/simrandiwan.jpg";
import dhruvdalwadi from "../img/dhruvdalwadi.jpg";
import Header from "./Header";

const Main = () => {

    const history = useHistory();

    useEffect(() => {
        document.title = "Quality Education";
        checkUser();
    })

    const checkUser = () => {
        if (window.localStorage.getItem("email") !== null) {
            history.push('/home');
        }
    }

    return (
        <div>
            <Header/>
            <div style={{textAlign: "center", marginTop: "5vh"}}>
                <img src={logo} height="150vh"/>
                <h2 style={{marginTop: "1vh"}}>Quality Education</h2>
            </div>
            <p style={{margin: "5vh", fontSize: "20px"}}>
                United Nations Sustainable Development Goal 4 aims at ensuring inclusive and equitable quality education
                and promote lifelong learning opportunities for all. This goal ensures that all girls and boys complete
                free primary and secondary schooling by 2030. It also aims to provide equal access to affordable
                vocational training, to eliminate gender and wealth disparities and achieve universal access to a
                quality higher education.
            </p>
            <p style={{margin: "5vh", fontSize: "20px"}}>
                The main objective is to provide quality education to those children who are in rural and isolated
                areas, as some of these places lack in good environment and good teaching faculty. The application would
                provide an opportunity to those volunteers who are willing to share their knowledge and education. These
                volunteers can even select a location for teaching those students.
            </p>
            <hr style={{borderWidth: "2px", borderColor: "black"}}/>
            <h2 style={{textAlign: "center", marginTop: "5vh"}}>Features</h2>
            <div className="row" style={{margin: "5vh"}}>
                <div className="col-sm-6 col-md-6 col-lg-4 mx-auto mb-3">
                    <div className="card"
                         style={{textAlign: "center", borderColor: "black", backgroundColor: "lightblue"}}>
                        <div className="card-body">
                            <strong>Virtual Classroom</strong>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 mx-auto mb-3">
                    <div className="card"
                         style={{textAlign: "center", borderColor: "black", backgroundColor: "lightblue"}}>
                        <div className="card-body">
                            <strong>Offline Video Learning</strong>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 mx-auto mb-3">
                    <div className="card"
                         style={{textAlign: "center", borderColor: "black", backgroundColor: "lightblue"}}>
                        <div className="card-body">
                            <strong>Study Material</strong>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 mx-auto mb-3">
                    <div className="card"
                         style={{textAlign: "center", borderColor: "black", backgroundColor: "lightblue"}}>
                        <div className="card-body">
                            <strong>Discussion Forum</strong>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 mx-auto mb-3">
                    <div className="card"
                         style={{textAlign: "center", borderColor: "black", backgroundColor: "lightblue"}}>
                        <div className="card-body">
                            <strong>Online Assessment</strong>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 mx-auto mb-3">
                    <div className="card"
                         style={{textAlign: "center", borderColor: "black", backgroundColor: "lightblue"}}>
                        <div className="card-body">
                            <strong>Scholarships</strong>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{borderWidth: "2px", borderColor: "black"}}/>
            <h2 style={{textAlign: "center", marginTop: "5vh"}}>Join Us</h2>
            <p style={{margin: "5vh", fontSize: "20px"}}>
                Interested students and volunteers can become part of this innovative idea. We are looking for those
                volunteers who can provide knowledge and practical experience to students. Students can enroll themself
                and can learn new concepts for free of cost (premium features available).
            </p>
            <div style={{textAlign: "center", marginBottom: "5vh"}}>
                <Link to="/register">
                    <button type="button" className="btn btn-primary btn-lg">Register</button>
                </Link>
            </div>
            <hr style={{borderWidth: "2px", borderColor: "black"}}/>
            <h2 style={{textAlign: "center", marginTop: "5vh"}}>Developers</h2>
            <div className="row" style={{margin: "5vh"}}>
                <div className="col-sm-8 col-md-6 col-lg-3 mx-auto mb-3">
                    <div className="card" style={{width: "100%"}}>
                        <img src={deepmuni} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Deep Muni</h5>
                            <p className="card-text">Expert in developing web applications using Node.js, React.js, and
                                Angular.js. Full Stack Developer.</p>
                            <p className="card-text" style={{fontStyle: "italic"}}>(Masters of Applied Computer
                                Science)</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-3 mx-auto mb-3">
                    <div className="card" style={{width: "100%"}}>
                        <img src={dhruvtarpara} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Dhruv Tarpara</h5>
                            <p className="card-text">Major area of interest in working on back-end using Java. Moreover,
                                he also worked on different cloud platforms.</p>
                            <p className="card-text" style={{fontStyle: "italic"}}>(Masters of Applied Computer
                                Science)</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-3 mx-auto mb-3">
                    <div className="card" style={{width: "100%"}}>
                        <img src={simrandiwan} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Simranbanu Diwan</h5>
                            <p className="card-text">Developed many web applications using Node.js and React.js.
                                Majorily a back-end developer.</p>
                            <p className="card-text" style={{fontStyle: "italic"}}>(Masters of Applied Computer
                                Science)</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-3 mx-auto mb-3">
                    <div className="card" style={{width: "100%"}}>
                        <img src={dhruvdalwadi} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Dhruv Dalwadi</h5>
                            <p className="card-text">Strong knowledge base in MERN (MongoDB, Express.js, React.js, and
                                Node.js) technologies.</p>
                            <p className="card-text" style={{fontStyle: "italic"}}>(Masters of Applied Computer
                                Science)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Main);
