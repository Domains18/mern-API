const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Cannot be null!'],
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Goal', goalSchema)