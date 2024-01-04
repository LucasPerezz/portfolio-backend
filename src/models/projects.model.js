const mongoose = require('mongoose');

const projectsCollection = 'proyects';

const proyectsSchema = new mongoose.Schema({
    project: String,
    github: String,
    url: String,
    utilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'skills'
    }],
    image: String
})

proyectsSchema.pre('findOne', function() {
    this.populate('proyects.utilities');
});

const projectModel = mongoose.model(projectsCollection, proyectsSchema);

module.exports = projectModel;