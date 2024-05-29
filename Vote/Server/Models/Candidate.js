const mongoose = require('mongoose')
const CandidateSchema = new mongoose.Schema({
    candidatename:{
        type:String,
        required:true
    },
    votecount:{
        type: Number,
        default:0
    }
})

const candidateModel = mongoose.model("Vote_details", CandidateSchema)
module.exports = candidateModel