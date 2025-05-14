const express = require('express');
const router = express.Router();

const crud = require("../controller/controller");

router.get('/hello', (req, res) => res.send("hello world"));
router.get('/',crud.home)
router.post('/create', crud.create);
router.get("/read", crud.read);
router.get("/edit/:id", crud.edit);        
router.post('/update/:id', crud.updated);
router.get('/delete/:id', crud.delete);

module.exports = router;
