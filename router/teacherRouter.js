const express = require('express');
const teacherRouter = express.Router();

const teacherCrud= require("../controller/teacher.controller")

teacherRouter.get('/addteacher',teacherCrud.homePage)

teacherRouter.post('/createteacher', teacherCrud.createTeacher);

teacherRouter.get('/allteacher',teacherCrud.allteachers)




module.exports = teacherRouter;