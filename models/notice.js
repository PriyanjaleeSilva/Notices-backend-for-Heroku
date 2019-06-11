const mongoose = require('mongoose');

var Notice = mongoose.model('Notice', {
    course: { type: String },
    date: { type: Date },
    notice: { type: String }
});

module.exports = { Notice };