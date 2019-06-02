var Product = require('../../model/Product');
var Messages = require('../../validation/messages');
var ObjectId = require('mongoose').Types.ObjectId;

async function getProduct(req,res){
     var result = {
        status : false
    };
    var productId = req.params.id;
    var findQuery = {
        _id : new ObjectId(productId)
    };
    Product.findOne(findQuery, function (err, responseData) {
        if(responseData){
            result.response = responseData;
            result.status = true;
            res.status(200);
            res.json(result);
        }else{
            result.message = Messages.noDataFound;
            res.status(200);
            res.json(result);
        }
    });
}

module.exports.getProduct = getProduct;





