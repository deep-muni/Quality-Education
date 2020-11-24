import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import Header from "./Header";
class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header/>
                <div style={{textAlign:"center", marginTop:"5vh"}}>
                    <img src={logo} height="150vh" />
                    <h2 style={{marginTop:"1vh"}}>Quality Education</h2>
                </div>
                <p style={{margin:"5vh", fontSize:"20px"}}>
                    United Nations Sustainable Development Goal 4 aims at ensuring inclusive and equitable quality education and promote lifelong learning opportunities for all. This goal ensures that all girls and boys complete free primary and secondary schooling by 2030. It also aims to provide equal access to affordable vocational training, to eliminate gender and wealth disparities and achieve universal access to a quality higher education.
                </p>
                <p style={{margin:"5vh", fontSize:"20px"}}>
                    The main objective is to provide quality education to those children who are in rural and isolated areas, as some of these places lack in good environment and good teaching faculty. The application would provide an opportunity to those volunteers who are willing to share their knowledge and education. These volunteers can even select a location for teaching those students.
                </p>
                <hr style={{borderWidth:"2px", borderColor:"black"}}/>
                <h2 style={{textAlign:"center", marginTop:"5vh"}}>Features</h2>
                <div className="row" style={{margin:"5vh"}}>
                    <div className="col-sm-6 col-md-6 col-lg-4 mx-auto mb-3">
                        <div class="card" style={{textAlign:"center", borderColor:"black", backgroundColor:"lightblue"}}>
                            <div class="card-body">
                                <strong>Virtual Classroom</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 mx-auto mb-3">
                        <div class="card" style={{textAlign:"center", borderColor:"black", backgroundColor:"lightblue"}}>
                            <div class="card-body">
                                <strong>Offline Video Learning</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 mx-auto mb-3">
                        <div class="card" style={{textAlign:"center", borderColor:"black", backgroundColor:"lightblue"}}>
                            <div class="card-body">
                                <strong>Study Material</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 mx-auto mb-3">
                        <div class="card" style={{textAlign:"center", borderColor:"black", backgroundColor:"lightblue"}}>
                            <div class="card-body">
                                <strong>Discussion Forum</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 mx-auto mb-3">
                        <div class="card" style={{textAlign:"center", borderColor:"black", backgroundColor:"lightblue"}}>
                            <div class="card-body">
                                <strong>Online Assessment</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 mx-auto mb-3">
                        <div class="card" style={{textAlign:"center", borderColor:"black", backgroundColor:"lightblue"}}>
                            <div class="card-body">
                                <strong>Scholarships</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{borderWidth:"2px", borderColor:"black"}}/>
                <h2 style={{textAlign:"center", marginTop:"5vh"}}>Join Us</h2>
                <p style={{margin:"5vh", fontSize:"20px"}}>
                    Interested students and volunteers can become part of this innovative idea. We are looking for those volunteers who can provide knowledge and practical experience to students. Students can enroll themself and can learn new concepts for free of cost (premium features available).
                </p>
                <div style={{textAlign:"center",marginBottom:"5vh"}}>
                    <Link to="/register"><button type="button" className="btn btn-primary btn-lg">Register</button></Link>
                </div>
                <hr style={{borderWidth:"2px", borderColor:"black"}}/>
                <h2 style={{textAlign:"center", marginTop:"5vh"}}>Developers</h2>
                <div className="row" style={{margin:"5vh"}}>
                    <div className="col-sm-8 col-md-6 col-lg-3 mx-auto mb-3">
                        <div className="card" style={{width:"100%"}}>
                            <img src="https://scontent.fyaw1-1.fna.fbcdn.net/v/t1.0-9/69331413_2530402660316090_1814845070944239616_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=WGGn-y9rT6sAX8cMr47&_nc_ht=scontent.fyaw1-1.fna&oh=cb4a350d6a03b378e670389e612fdff9&oe=5FDD7378" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Deep Muni</h5>
                                    <p className="card-text">Expert in developing web applications using Node.js, React.js, and Angular.js. Majorily a front-end developer.</p>
                                    <p className="card-text" style={{fontStyle:"italic"}}>(Masters of Applied Computer Science)</p> 
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-6 col-lg-3 mx-auto mb-3">
                        <div className="card" style={{width:"100%"}}>
                            <img src="https://media-exp1.licdn.com/dms/image/C5603AQEI25K2cllUMQ/profile-displayphoto-shrink_800_800/0?e=1611792000&v=beta&t=MwcmXAeNcJPryEpRI5hxGcfDj8FuvqlC4CMKa2JVDlw" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Dhruv Tarpara</h5>
                                    <p className="card-text">Major area of interest in working on back-end using Java. Moreover, he also worked on different cloud platforms.</p>
                                    <p className="card-text" style={{fontStyle:"italic"}}>(Masters of Applied Computer Science)</p>
                                </div>
                        </div>  
                    </div>
                    <div className="col-sm-8 col-md-6 col-lg-3 mx-auto mb-3">
                        <div className="card" style={{width:"100%"}}>
                            <img src="https://scontent.fyaw1-1.fna.fbcdn.net/v/t1.0-9/121967907_2139821692817174_7210929821271490191_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=zELle-fBGKAAX_kECXv&_nc_ht=scontent.fyaw1-1.fna&oh=d44355d741dc257f86f476514cc43dec&oe=5FDEF76A" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Simranbanu Diwan</h5>
                                    <p className="card-text">Developed many web applications using Node.js and React.js. Majorily a back-end developer.</p>
                                    <p className="card-text" style={{fontStyle:"italic"}}>(Masters of Applied Computer Science)</p>
                                </div>
                        </div>  
                    </div>
                    <div className="col-sm-8 col-md-6 col-lg-3 mx-auto mb-3">
                        <div className="card" style={{width:"100%"}}>
                            <img src="https://scontent.fyaw1-1.fna.fbcdn.net/v/t1.0-9/116101625_359611021869424_7588676929496362341_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=4xgEUL0GwnwAX_jI3gR&_nc_ht=scontent.fyaw1-1.fna&oh=ecffee6cc6f45c40f4dc27f3126b8260&oe=5FE07BAE" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Dhruv Dalwadi</h5>
                                    <p className="card-text">Strong knowledge base in MERN (MongoDB, Express.js, React.js, and Node.js) technologies.</p>
                                    <p className="card-text" style={{fontStyle:"italic"}}>(Masters of Applied Computer Science)</p>
                                </div>
                        </div>  
                    </div>
                </div>
            </div>
         );
    }
}
 
export default About;