const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    text: {
        type: String,
        required: [true, 'Cannot be null!'],
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Goal', goalSchema)