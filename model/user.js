const mongoose = require('mongoose');
const teacher = require('./teacher');

const userSchema =new  mongoose.Schema({
    name:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require: true,
    },
    gender:{
        type:String,
        require: true,
    },
    teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teacher',
   
},
})

module.exports = mongoose.model("user",userSchema);
