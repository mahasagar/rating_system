var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
// Schema
var schema = new mongoose.Schema({
    orderId: {type: String, require: true},
    userId: {type: mongoose.Schema.Types.ObjectId, require: true},
    status : { type : String , enum : ['NEW','IN_PROCESS','DISPATCHED','DELIVERED','CANCELLED','RETURNED'], default : 'NEW'},
    items : [{
         productId: {type: mongoose.Schema.Types.ObjectId, require: true},
         quantity : {type: Number, require: true },
         unitPrice: {type: Number},
         totalPricePerItem: {type: Number}
    }],
    paymentDetails : {
        grandTotal: {type: Number}
    },
    updatedAt: {type: Date},
    updatedBy: {type: mongoose.Schema.Types.ObjectId},
    createdDate: {type: Date, require: true, default: Date.now}
});

// Model
var model = mongoose.model('Order', schema);

// Public API
module.exports = model;
