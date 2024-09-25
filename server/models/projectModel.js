const mongoose = require('mongoose')


//schema Writing
const projectSCheme = new mongoose.Schema( {
    title:{
        type:String,
        required:true,
    },
    
    desc:{
        type:String,
        require:true,

    }
})


// Projects

const project = mongoose.model("Projects",projectSCheme)

module.exports = project;