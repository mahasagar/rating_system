var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
// Schema
var schema = new mongoose.Schema({
    username: {type: String},
    password: {type: String},
    name: {type: String},
    updatedAt: {type: Date},
    createdDate: {type: Date, require: true, default: Date.now}
});

// Model
var model = mongoose.model('Users', schema);

// Safe JSON (internal data removed)
function getSafeJSON(user) {
    var user = user.toJSON();
    delete user.__v;
    if (user.password) {
        delete user.password;
    }
    return user;
};

// Public API
module.exports = model;
module.exports.getSafeJSON = getSafeJSON;
