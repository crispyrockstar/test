const mongoose = require('mongoose');
const model = {};
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})
model.userModel= mongoose.model('User', userSchema);

module.exports = model;