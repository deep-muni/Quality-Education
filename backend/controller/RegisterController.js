// Load User model
const User = require("../model/RegisterModel");
const bcrypt = require("bcryptjs");

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
        gender: req.body.gender
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

const getProfile = (req, res, next) => {
  console.log("inside get profile.")
  res.send("fake profile.")
  // try {
  //     let email_id = req.params.emailid;
  //     let user =await User.findOne({where: {
  //       email: req.body.email_id
  //     }});
  //     console.log(user);
  // }catch (error) {
  //     next(error);
  //   }
}

const updateProfile =  async (req, res,next) => {
    console.log("updating profile")
    try {
      let email_id = req.body.emailid;
      let user = await User.findOne({where: {
        email: email_id
      }});
  
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
    });

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

  const deleteProfile = async (req,res,next) => {
      console.log("deleting profile");
      try{
          let email_id = req.body.emailid;
          let user = await User.findOne({
              where: {email:email_id}
          });

          if(user === null){
              res.send("fail");
          }else{
              user = await User.deleteOne({
                  where :{
                      email : email_id
                  }}
              ).then(()=>{
                  console.log("profile deleted");
              });
            res.status(200);
            res.send("success");
          }
      } catch (error){
          next(error);
      }
  }
  module.exports.updateProfile = updateProfile;
  module.exports.getProfile = getProfile;
  module.exports.deleteProfile = deleteProfile;


