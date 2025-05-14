const express = require('express');
const teacherRouter = express.Router();

const teacherRepositories= require("../controller/teacher.controller")

teacherRouter.get('/addteacher',teacherRepositories.home)
teacherRouter.post('/createteacher', teacherRepositories.createTeacher);
teacherRouter.get('/allteacher',teacherRepositories.read)




module.exports = teacherRouter;