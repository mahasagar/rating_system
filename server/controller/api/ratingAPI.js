var Rating = require('../../model/Rating');
var ObjectId = require('mongoose').Types.ObjectId;

function addRating(req, res) {
    var result = {
        status : false
    };
    var reqParam = req.body;
    Rating.create(reqParam,function (err, response) {
        if (response) {
            result.message = 'Rating Added';
            result.status = true;
            res.json(result);
        }else{
            result.message = 'Rating Not Added';
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
            result.message = 'No Data Found';
            res.status(200);
            res.json(result);
        }
    });
}


module.exports.getRatings = getRatings;
module.exports.addRating = addRating;





