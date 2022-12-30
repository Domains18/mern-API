const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'enter name']
    },
    email: {
        type: String,
        required: [true, 'enter email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'enter your password']
    },
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);