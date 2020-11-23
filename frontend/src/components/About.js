import React, { Component } from "react";
class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2 style={{textAlign:"center", marginTop:"5vh"}}>About Us</h2>
                <p style={{margin:"5vh", fontSize:"20px"}}>
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tincidunt varius tortor, ut interdum lacus imperdiet ac. Suspendisse potenti. Aenean ultrices luctus rhoncus. Donec tincidunt rhoncus ultricies. Vivamus accumsan consectetur viverra. Quisque a facilisis eros. Phasellus eu libero sit amet nibh mollis bibendum sit amet mollis nulla. Suspendisse ornare est at elit facilisis molestie. Donec luctus in nisi sit amet dapibus. In egestas ipsum eu massa tincidunt, sagittis aliquet mi iaculis. Proin eu tortor erat. Proin a viverra ante, quis vulputate tortor. Donec fermentum sem consectetur lorem auctor congue. Suspendisse commodo sed lacus id ultricies.
                </p>
                <h2 style={{textAlign:"center", marginTop:"5vh"}}>Developers</h2>
                <div className="row" style={{margin:"5vh"}}>
                    <div className="col-sm-8 col-md-6 col-lg-3 mx-auto mb-3">
                        <div className="card" style={{width:"100%"}}>
                            <img src="https://scontent.fyaw1-1.fna.fbcdn.net/v/t1.0-9/69331413_2530402660316090_1814845070944239616_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=WGGn-y9rT6sAX8cMr47&_nc_ht=scontent.fyaw1-1.fna&oh=cb4a350d6a03b378e670389e612fdff9&oe=5FDD7378" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Deep Muni</h5>
                                    <p className="card-text">Expert in developing web applications using Node.js, React.js, and Angular.js</p>
                                    <p className="card-text" style={{fontStyle:"italic"}}>(Masters of Applied Computer Science)</p> 
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-6 col-lg-3 mx-auto mb-3">
                        <div className="card" style={{width:"100%"}}>
                            <img src="https://media-exp1.licdn.com/dms/image/C5603AQEI25K2cllUMQ/profile-displayphoto-shrink_800_800/0?e=1611792000&v=beta&t=MwcmXAeNcJPryEpRI5hxGcfDj8FuvqlC4CMKa2JVDlw" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Dhruv Tarpara</h5>
                                    <p className="card-text">Major area of interest in working on back-end using Java. Moreover, he also worked on different cloud platforms, i.e. Azure, AWS</p>
                                    <p className="card-text" style={{fontStyle:"italic"}}>(Masters of Applied Computer Science)</p>
                                </div>
                        </div>  
                    </div>
                    <div className="col-sm-8 col-md-6 col-lg-3 mx-auto mb-3">
                        <div className="card" style={{width:"100%"}}>
                            <img src="https://scontent.fyaw1-1.fna.fbcdn.net/v/t1.0-9/121967907_2139821692817174_7210929821271490191_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=zELle-fBGKAAX_kECXv&_nc_ht=scontent.fyaw1-1.fna&oh=d44355d741dc257f86f476514cc43dec&oe=5FDEF76A" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Simranbanu Diwan</h5>
                                    <p className="card-text">Developed many web applications using Node.js and React.js. Majorily a back-end developer</p>
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