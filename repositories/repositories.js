const userModel = require("../model/user");
const teacherModel = require("../model/teacher");

class userRepositories {
  // Create a new user
  createStudent = async (data) => {
    try {
      const newUser = new userModel(data);
      await newUser.save();
      return newUser;
    } catch (error) {
      console.error("Error creating student:", error.message);
      throw error;
    }
  };

  // Read all users
  readUsers = async () => {
    try {
      const users = await userModel.find();
      return users;
    } catch (error) {
      console.error("Error reading users:", error.message);
      throw error;
    }
  };

  // Update a user by ID
  updateUser = async (id, updatedData) => {
    try {
      const updatedUser = await userModel.findByIdAndUpdate(id, updatedData, { new: true });
      return updatedUser;
    } catch (error) {
      console.error("Error updating user:", error.message);
      throw error;
    }
  };

  // Delete a user by ID
  deleteUser = async (id) => {
    try {
      const deletedUser = await userModel.findByIdAndDelete(id);
      return deletedUser;
    } catch (error) {
      console.error("Error deleting user:", error.message);
      throw error;
    }
  };

  // Read users with their teacher info via aggregation
  readUsersWithTeacher = async () => {
    try {
      return await userModel.aggregate([
        // join with teachers collection
        {
          $lookup: {
            from: "teachers",               // MongoDB collection name (lowercase plural)
            localField: "teacher",          // field in user document
            foreignField: "_id",
            as: "teacherDoc"
          }
        },
        // unwind the array (may be empty)
        { $unwind: { path: "$teacherDoc", preserveNullAndEmptyArrays: true } },
        // project desired fields
        {
          $project: {
            name: 1,
            email: 1,
            gender: 1,
            teacher: 1,
            teacherName: "$teacherDoc.name"
          }
        }
      ]);
    } catch (error) {
      console.error("Error aggregating users with teacher:", error.message);
      throw error;
    }
  };
}

module.exports = new userRepositories();
