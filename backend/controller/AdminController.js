const subjects = { "subjects": ["Maths", "Science", "English", "Computer"] };
const locations = { "locations": ["Ahmedabad", "Surat", "Halifax", "Baroda"] };

const getSubjects = (req, res) => {
    res.json(subjects);
}

const getLocations = (req, res) => {
    res.json(locations);
}

module.exports.getSubjects = getSubjects;
module.exports.getLocations = getLocations;