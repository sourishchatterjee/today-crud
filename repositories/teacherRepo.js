const teacherModel = require("../model/teacher");

class teacherRepositories {
  createTeacher = async (data) => {
    try {
      const newteacher = teacherModel(data);
      await newteacher.save();
      
    } catch (error) {
      console.error( error);
    }
  };


   readTeacher = async () => {
  try {
    const teacherusers = await teacherModel.find();
    return teacherusers;
  } catch (error) {
    console.log(error);
    
  }
};

//    updateUser = async (id, updatedData) => {
//   try {
//     const updatedUser = await userModel.findByIdAndUpdate(id, updatedData, {
//       new: true,
//     });
//     return updatedUser;
//   } catch (error) {
//     console.log(error)
//   }
// };


// deleteUser = async (id) => {
//   try {
//     const deleteUser = await userModel.findByIdAndDelete(id);
//     return deleteUser;
//   } catch (error) {
//   console.log(error)
//   }
// };



}

module.exports = new teacherRepositories();
