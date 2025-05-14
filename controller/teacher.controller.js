// const teacherRepositories= require("../repositories/teacherRepo")

// //
// class teacherCrud {
//   home = async (req, res) => {
//     res.render("teacherIndex");
//   };
// ///
// createTeacher = async (req, res) => {
//   try {
//     const { name } = req.body;
//     await teacherRepositories.createTeacher({ name });

//     res.redirect("/read"); // Redirect to the read page
//   } catch (error) {
//     res.status(500).json({
//       message: "Something went wrong",
//       error: error.message,
//     });
//   }
// };

// //////
//   read = async (req, res) => {
//     try {
      
//       let allusers= await userRepositories.readUsers()
//       res.render("read", { users: allusers });
//     } catch (err) {
//       res.status(500).send(err.message);
//     }
//   };



// //    updated = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const { name, email, gender,teacher } = req.body;
// //     const updatedUser = await userRepositories.updateUser(id, { name, email, gender,teacher });
// //     if (!updatedUser) {
// //       return res.status(404).send("User not found");
// //     }
// //     res.redirect("/read");
// //   } catch (err) {
// //     res.status(500).send(err.message);
// //   }
// // };


// //   delete = async (req, res) => {
// //     try {
// //       //await userModel.findOneAndDelete({ _id: req.params.id });
// //       const _id = req.params.id;
// //       await userRepositories.deleteUser({_id})
// //       res.redirect("/read");
// //     } catch (err) {
// //       res.status(500).send(err.message);
// //     }
// //   };


// }

// module.exports= new teacherCrud()


const teacherRepositories = require("../repositories/teacherRepo");

class teacherCrud {
  // Render home page
  home = async (req, res) => {
    res.render("teacherIndex");
  };

  // Create a new teacher
  createTeacher = async (req, res) => {
    try {
      const { name } = req.body;
      await teacherRepositories.createTeacher({ name });
      res.redirect("/allteacher"); 
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  };

  // Read all teachers
  read = async (req, res) => {
    try {
      const allTeachers = await teacherRepositories.readTeacher(); // <- Updated here
      res.render("teacherRead", { teachers: allTeachers }); // <- Rendering correct template and data
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

  // You can implement updateTeacher and deleteTeacher similarly if needed
}

module.exports = new teacherCrud();
