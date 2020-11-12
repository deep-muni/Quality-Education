// Load User model
const User = require("../model/RegisterModel");
const bcrypt = require("bcryptjs");
const subjects = { "subjects": ["Maths", "Science", "English", "Computer"] };

const createProfile = (req, res, next) => {
  console.log("creating new profile");
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }
    else {
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        education: req.body.education,
        profiletype: req.body.profiletype,
        gender: req.body.gender,
        country: req.body.country,
        address: req.body.address,
        subject: req.body.subject
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => {
              console.log(err);
              return res.status(400).json(err.message);
            });
        });
      });

    }
  });
}

const getProfile = async (req, res, next) => {
  console.log("get profile.")
  try {
    User.findOne({ email: req.body.email }).then(user => {
      console.log(user);
      if (user) {
        return res.json(user);
      }
      return res.status(400).send({ "error": "user not found" });
    });
  } catch (error) {
    next(error);
  }
}

const updateProfile = async (req, res, next) => {
  console.log("updating profile")
  try {
    let email_id = req.body.emailid;
    let user = await User.findOne({
      where: {
        email: email_id
      }
    });

    if (user === null) {
      res.send("fail");
    } else {
      user = await User.update(
        {
          where: {
            email: email_id,
          },
        }
      ).then(() => {
        console.log("Profile updated!");
      });
      res.status(200);
      res.send("success");
    }
    if (user === null) {
      res.send("fail");
    } else {
      user = User.update(
        {
          where: {
            email: email_id,
          },
        }
      ).then(() => {
        console.log("Profile updated!");
      });
      res.status(200);
      res.send("success");
    }
  } catch (error) {
    next(error);
  }
}

const deleteProfile = async (req, res, next) => {
  console.log("deleting profile");
  try {
    let email_id = req.body.emailid;
    let user = await User.findOne({
      where: { email: email_id }
    });

    if (user === null) {
      res.send("fail");
    } else {
      user = await User.deleteOne({
        where: {
          email: email_id
        }
      }
      ).then(() => {
        console.log("profile deleted");
      });
      res.status(200);
      res.send("success");
    }
  } catch (error) {
    next(error);
  }
}


const getSubjects = (req, res, next) => {
  res.json(subjects);
}
module.exports.updateProfile = updateProfile;
module.exports.getProfile = getProfile;
module.exports.deleteProfile = deleteProfile;
module.exports.createProfile = createProfile;
module.exports.getSubjects = getSubjects;