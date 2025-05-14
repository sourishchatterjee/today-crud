const teacherModel = require("../model/teacher");

class teacherRepositories {

  // Create a new teacher
  createTeacher = async (data) => {
    try {
      // data should be an object, e.g. { name: 'Alice' }
      const newTeacher = new teacherModel(data);
      await newTeacher.save();
      return newTeacher;
    } catch (error) {
      console.error("Error creating teacher:", error);
      throw error;
    }
  };

  // Read all teachers
  readTeacher = async () => {
    try {
      const teacherUsers = await teacherModel.find();
      return teacherUsers;
    } catch (error) {
      console.error("Error reading teachers:", error);
      throw error;
    }
  };
}

module.exports = new teacherRepositories();
