var Rating = require('../../model/Rating');
var Messages = require('../../validation/messages');
var ObjectId = require('mongoose').Types.ObjectId;

function addRating(req, res) {
    var result = {
        status : false
    };
    var reqParam = req.body;
    Rating.create(reqParam,function (err, response) {
        if (response) {
            result.message = Messages.ratingAdded;
            result.status = true;
            res.json(result);
        }else{
            result.message = Messages.ratingAddedFailed;
            res.json(result);
        }
    });
}

function getRatings(req,res){
     var result = {
        status : false
    };
    var reqParam = req.body;
    var findQuery = {};

    var pageNo = reqParam.page ?  parseInt(reqParam.page) : 1;
    var pageSize = reqParam.pageSize ? parseInt(reqParam.pageSize) : 10;
    var limitQuery = { '$limit' : pageSize };
    var skipQuery =  { '$skip' : (pageNo - 1) * pageSize };
    var sortQuery = { 'createdDate' : -1};
    var query = [];
    var paginationQuery = {
        $facet: {
            result: [skipQuery, limitQuery],
            totalCount: [
              {
                $count: 'count'
              }
            ]
        }
    }
    var userDataQuery = {
       'from': 'users',
       localField: 'userId',
       foreignField: '_id',
       'as': 'user'
    }
    query.push(
        { $match: findQuery},
        { $lookup : userDataQuery },
        { $sort : sortQuery },
        paginationQuery
    );
    Rating.aggregate(query, function (err, responseData) {
        if (responseData && responseData[0]) {
            result.response = responseData[0].result;
            if(responseData[0].totalCount[0]){
                result.count = responseData[0].totalCount[0].count;
            }
            result.status = true;
            res.status(200);
            res.json(result);
        } else {
            result.message = Messages.noDataFound;
            res.status(200);
            res.json(result);
        }
    });
}

function updateRating(req,res){
    var result = {
        status : false
    };
    var ratingId = req.params.id;
    var reqParam = req.body;
    var findQuery = {
        _id : ratingId
    };
    var updateQuery = {
        updatedBy : reqParam.userId
    };
     //TODO: JSON Mapper to be added
    if(reqParam.comment){
        updateQuery.comment = reqParam.comment;
    }
    if(reqParam.title){
        updateQuery.title = reqParam.title;
    }
    if(reqParam.rating){
        updateQuery.rating = reqParam.rating;
    }
    Rating.update(findQuery,{ $set :  updateQuery },function (err, response) {
        if (response) {
            result.message = Messages.updatedSuccessfully;
            result.status = true;
            res.json(result);
        }else{
            result.message = Messages.updateFailed;
            res.json(result);
        }
    });
}

module.exports.getRatings = getRatings;
module.exports.addRating = addRating;
module.exports.updateRating = updateRating;






