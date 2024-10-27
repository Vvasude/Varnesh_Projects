const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum:['Not Started', 'In Progress', 'Completed'],
    },
    //pretains to Client model
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
});

module.exports = mongoose.model('Project', ProjectSchema);