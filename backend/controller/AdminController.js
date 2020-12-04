const Volunteer = require("../model/Volunteer");
const subjects = {"subjects": ["Maths", "Science", "English", "Computer Science"]};
const locations = {"locations": ["Ahmadabad", "Surat", "Halifax", "Baroda"]};

const getSubjects = (req, res) => {
    res.json(subjects);
}

const getLocations = (req, res) => {
    res.json(locations);
}

const findVolunteer = (req, res) => {
    Volunteer.findOne({email: req.query.email})
        .then(data => {
            if (data) {
                res.send({status: false, message: "Volunteer is not active"});
            } else {
                res.send({status: true, message: "Volunteer is active"});
            }
        })
        .catch(err => {
            res.send({status: null, message: err});
        });
}

const getVolunteers = (req, res) => {
    Volunteer.find({}, function (err, material) {
        if (err) {
            res.json({status: false, message: "Not Found"})
        } else {
            let volunteerList = [];
            material.forEach(function (volunteer) {
                volunteerList.push(volunteer);
            });
            res.json({status: true, volunteer: volunteerList});
        }
    });
}

const addVolunteer = (req, res) => {
    const newVolunteer = new Volunteer({
        email: req.body.email,
        fullName: req.body.fullName,
    });

    newVolunteer.save()
        .then(data => {
            res.json({status: true, message: "Volunteer Added"})
        })
        .catch(error => console.log(error));
}

const activateVolunteer = (req, res) => {
    Volunteer.deleteOne({ email: req.query.email })
        .then(data => {
            if(data.deletedCount > 0){
                res.json({status: true, message: "Volunteer Activated"})
            }else{
                res.json({status: false, message: "Volunteer not activated"})
            }
        })
        .catch(error => console.log(error));
}

module.exports.getSubjects = getSubjects;
module.exports.getLocations = getLocations;
module.exports.getVolunteers = getVolunteers;
module.exports.addVolunteer = addVolunteer;
module.exports.findVolunteer = findVolunteer;
module.exports.activateVolunteer = activateVolunteer;
