import React, { Component } from 'react';
import Header from './Header';
class Scholarship extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{overflow:"hidden"}}>
                <Header/>
                <div style={{textAlign:"center", marginTop:"5vh"}}>
                    <h2>Scholarships</h2>
                </div>
                  <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8 mx-auto mb-3"> 
                        <div className="card" style={{margin:"0 5vh"}}>
                            <div className="card-header">
                                <strong>Peter Kohler Scholarship</strong>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Applicants must be graduating from an Atlantic Canadian High School in June and entering their first year of full-time studies in an Engineering Program at a university in Atlantic Canada. Applicants will be adjudicated upon the basis of their character, financial need and academic standing. The value of the award is $15,000 per academic school year, renewable for up to four years. </p>
                                <p><strong>Amount:&nbsp;</strong>$15,000 renewable</p>
                                <p><strong>Link:&nbsp;</strong><a target="_blank" href="https://www.cognitoforms.com/CFNS1/PeterKohlerScholarshipApplication">https://www.cognitoforms.com/CFNS1/PeterKohlerScholarshipApplication</a></p>
                                <p><strong>Deadline:&nbsp;</strong>January 15, 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-8 col-lg-8 mx-auto mb-3"> 
                        <div className="card" style={{margin:"0 5vh"}}>
                            <div className="card-header">
                                <strong>Terry Fox Humanitarian Award</strong>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Candidate should demonstrate the highest ideals and qualities of citizenship, courage in overcoming obstacles, involvement in voluntary humanitarian and community work, and participation in sport and fitness. </p>
                                <p><strong>Amount:&nbsp;</strong>up to $7,000 / year </p>
                                <p><strong>Link:&nbsp;</strong><a target="_blank" href="https://terryfoxawards.ca/">https://terryfoxawards.ca/</a></p>
                                <p><strong>Deadline:&nbsp;</strong>February 1, 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-8 col-lg-8 mx-auto mb-3"> 
                        <div className="card" style={{margin:"0 5vh"}}>
                            <div className="card-header">
                                <strong>Weston Youth Innovation Award</strong>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Eligible individuals or groups are those who are 14-18 years of age, who have used science and/or technology as the basis for developing creative and innovative ideas aimed at solving real-world problems. Applicants will have had experience with putting their ideas into action, and as a result, have had a positive impact either in their own community or on a broader scale.</p>
                                <p><strong>Amount:&nbsp;</strong>$3,500 - $15,000</p>
                                <p><strong>Link:&nbsp;</strong><a target="_blank" href="https://www.ontariosciencecentre.ca/teachers-plus-students/weston-youth-innovation-award">https://www.ontariosciencecentre.ca/teachers-plus-students/weston-youth-innovation-award</a></p>
                                <p><strong>Deadline:&nbsp;</strong>February 12, 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-8 col-lg-8 mx-auto mb-3"> 
                        <div className="card" style={{margin:"0 5vh"}}>
                            <div className="card-header">
                                <strong>Horatio Alger Student Scholarships</strong>
                            </div>
                            <div className="card-body">
                                <p className="card-text">The Horatio Alger Association of Canada is offering 85 scholarships valued between $5,000 and $10,000 to students across Canada who are beginning their post-secondary studies in the fall of 2021. </p>
                                <p><strong>Amount:&nbsp;</strong>$5000-$10,000</p>
                                <p><strong>Link:&nbsp;</strong><a target="_blank" href="https://horatioalger.ca/en/scholarships/">https://horatioalger.ca/en/scholarships/</a></p>
                                <p><strong>Deadline:&nbsp;</strong>October 25, 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Scholarship;