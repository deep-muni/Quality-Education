import React, {useEffect} from 'react';
import "../css/Scholarship.css";
import Header from "./Header";

const Scholarship = () => {

    useEffect(() => {
        document.title = "Scholarship"
    }, [])

    const scholarships = [
        {
            scholarshipName: "Peter Kohler Scholarship",
            amount: "15,000 renewable",
            link: "https://www.cognitoforms.com/CFNS1/PeterKohlerScholarshipApplication",
            linkText: "Peter Kohler Scholarship Application",
            deadline: "January 15, 2021",
            description: "Applicants must be graduating from an Atlantic Canadian High School in June and entering their first year of full-time studies in an Engineering Program at a university in Atlantic Canada. Applicants will be adjudicated upon the basis of their character, financial need and academic standing. The value of the award is $15,000 per academic school year, renewable for up to four years."
        },
        {
            scholarshipName: "Terry Fox Humanitarian Award",
            amount: "up to $7,000 / year",
            link: "https://terryfoxawards.ca/",
            linkText: "Terry Fox Humanitarian Award Application",
            deadline: "February 1, 2021",
            description: "Candidate should demonstrate the highest ideals and qualities of citizenship, courage in overcoming obstacles, involvement in voluntary humanitarian and community work, and participation in sport and fitness."
        },
        {
            scholarshipName: "Weston Youth Innovation Award",
            amount: "$3,500 - $15,000",
            link: "https://www.ontariosciencecentre.ca/teachers-plus-students/weston-youth-innovation-award",
            linkText: "Weston Youth Innovation Award Application",
            deadline: "February 12, 2021",
            description: "Eligible individuals or groups are those who are 14-18 years of age, who have used science and/or technology as the basis for developing creative and innovative ideas aimed at solving real-world problems. Applicants will have had experience with putting their ideas into action, and as a result, have had a positive impact either in their own community or on a broader scale."
        },
        {
            scholarshipName: "Horatio Alger Student Scholarships",
            amount: "$5000-$10,000",
            link: "https://horatioalger.ca/en/scholarships/",
            linkText: "Horatio Alger Student Scholarships Application",
            deadline: "October 25, 2020",
            description: "The Horatio Alger Association of Canada is offering 85 scholarships valued between $5,000 and $10,000 to students across Canada who are beginning their post-secondary studies in the fall of 2021."
        }
    ];

    return (
        <div className="scholarship">
            <Header/>
            <div className="scholarship__heading">Scholarships</div>
            <div className="scholarship__list">
                {
                    scholarships.map((scholarship, index) => {
                        return (
                            <div className="scholarship__section" key={index}>
                                <div className="scholarship__name">{scholarship.scholarshipName}</div>
                                <div className="scholarship__details">
                                    <p className="scholarship__description">
                                        {scholarship.description}
                                    </p>
                                    <p className="scholarship__amount">
                                        <span>Amount: </span>
                                        {scholarship.amount}</p>
                                    <p className="scholarship__deadline">
                                        <span>Deadline: </span>
                                        {scholarship.deadline}</p>
                                    <p>Please visit <a className="scholarship__link" target="_blank" rel="noreferrer" href={scholarship.link}>{scholarship.linkText}</a> for more details.</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Scholarship;
