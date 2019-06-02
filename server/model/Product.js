var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
// Schema

var schema = new mongoose.Schema({
    name : {type: String, require: true },
    brand : {type: String},
    color : {type: String},
    dimensions : {type: String},
    description: {type: String},
    verified : { type: Boolean },
    status : { type : String , enum : ['ACTIVE','INACTIVE'], default : 'ACTIVE'},
    tags: {type: [String] },
    productType : {type: String},

    mrp: { type: Number },
    quantityAvailable: { type: Number },

    companyId : {type: mongoose.Schema.Types.ObjectId},
    manufacturer : {type: mongoose.Schema.Types.ObjectId},

    productIcon : {type: String},
    productImage : {type: [String] },
    productVideos: [{
        name : { type : String },
        url : { type : String }
    }],

    updatedAt: {type: Date},
    updatedBy: {type: mongoose.Schema.Types.ObjectId},
    createdBy: {type: mongoose.Schema.Types.ObjectId, require: true},
    createdDate: {type: Date, require: true, default: Date.now}
});

// Model
var model = mongoose.model('Product', schema);

// Public API
module.exports = model;
