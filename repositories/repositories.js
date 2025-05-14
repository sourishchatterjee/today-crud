const userModel = require("../model/user");

class userRepositories {
  createStudent = async (data) => {
    try {
      const newUser = userModel(data);
      await newUser.save();
    } catch (error) {
      console.error("Error creating student:", error.message);
    }
  };
   readUsers = async () => {
  try {
    const users = await userModel.find();
    return users;
  } catch (error) {
    console.log(error);
    
  }
};

   updateUser = async (id, updatedData) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    return updatedUser;
  } catch (error) {
    console.log(error)
  }
};


deleteUser = async (id) => {
  try {
    const deleteUser = await userModel.findByIdAndDelete(id);
    return deleteUser;
  } catch (error) {
  console.log(error)
  }
};



}

module.exports = new userRepositories();
