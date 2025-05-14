const userModel= require('../model/user')
const userRepositories= require("../repositories/repositories")
const teacherModel= require("../model/teacher")

class Crud {
  home = async (req, res) => {
    res.render("index");
  };

   create = async (req, res) => {
  try {
    const { name, email, gender,teacher } = req.body;

  const createdUser = await userRepositories.createStudent({ name, email, gender,teacher });
     res.redirect("/read");
    
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};


  // read = async (req, res) => {
  //   try {
      
  //     let allusers= await userRepositories.readUsers()
  //     res.render("read", { users: allusers });
  //   } catch (err) {
  //     res.status(500).send(err.message);
  //   }
  // };
read = async (req, res) => {
  try {
    const allUsers = await userRepositories.readUsersWithTeacher();
    res.render("read", { users: allUsers });
  } catch (err) {
    res.status(500).send(err.message);
  }
};


  edit = async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      //const user= await userRepositories.updateUser()
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.render("edit", { user });
    } catch (err) {
      res.status(500).send(err.message);
    }
  };



   updated = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, gender,teacher } = req.body;

    const updatedUser = await userRepositories.updateUser(id, { name, email, gender,teacher });

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    
    res.redirect("/read");

   
  } catch (err) {
    res.status(500).send(err.message);
  }
};



  delete = async (req, res) => {
    try {
      //await userModel.findOneAndDelete({ _id: req.params.id });
      const _id = req.params.id;
      await userRepositories.deleteUser({_id})
      res.redirect("/read");
    } catch (err) {
      res.status(500).send(err.message);
    }
  };



}

module.exports= new Crud()