
const teacherRepositories = require("../repositories/teacherRepo");

class teacherCrud {
  // Render home page
  homePage = async (req, res) => {
    res.render("teacherIndex");
  };

  // Create a new teacher
  createTeacher = async (req, res) => {
    try {
      const { name } = req.body;
      await teacherRepositories.createTeacher({name});

      //res.redirect("/teacher/allteacher"); 
     res.redirect('/teacher/allteacher');

    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  };
////
  // Read all teachers
  allteachers = async (req, res) => {
    try {
      const allTeachers = await teacherRepositories.readTeacher(); 

      console.log(allTeachers)
      res.render("teacherRead", {  allTeachers }); 
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

  
}

module.exports = new teacherCrud();
