const Material = require("../model/MaterialModel");

const addMaterial = async (req, res) => {

    const newMaterial = new Material({
        url: req.body.url,
        title: req.body.title,
        subject: req.body.subject
    });

    newMaterial.save()
        .then(data => {
            res.json({status: true, message: "Material Added"})
        })
        .catch(error => console.log(error));
}

const getMaterial = async (req, res) => {
    Material.find({}, function(err, material) {
        if (err) {
            res.json({status: false, message: "Not Found"})
        }else{
            let materialList = [];
            material.forEach(function(material) {
                materialList.push(material);
            });
            res.json({status: true, material: materialList});
        }
    });
}

module.exports.getMaterial = getMaterial;
module.exports.addMaterial = addMaterial;
