var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
// Schema
var schema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, require: true},
    rating : {type: Number, require: true },//Stars
    title : {type: String, require: true },
    comment : {type: String},
    images : [{type: String}],
    rateFeatures : [{
        title : {type: String},
        rating :  {type: Number}
    }],
    orderId : {type: mongoose.Schema.Types.ObjectId},//Verified Purchase,
    status : { type : String , enum : ['NEW','VERIFIED','REJECTED'], default : 'NEW'},
    parentCommentId : {type: mongoose.Schema.Types.ObjectId},
    updatedAt: {type: Date},
    createdDate: {type: Date, require: true, default: Date.now}
});

// Model
var model = mongoose.model('Rating', schema);

// Public API
module.exports = model;
