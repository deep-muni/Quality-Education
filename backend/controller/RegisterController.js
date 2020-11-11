// Load User model
const User = require("../model/RegisterModel");


const getProfile = (req,res, next) => {
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

const updateProfile = (req, res,next) => {
    console.log("updating profile")
    try {
      let email_id = req.params.emailid;
      let user = User.findOne({where: {
        email: req.body.email_id
      }});
  
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

  module.exports.updateProfile = updateProfile;
  module.exports.getProfile = getProfile;


