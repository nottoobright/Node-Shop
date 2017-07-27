var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);