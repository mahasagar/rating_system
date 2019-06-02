angular.module('ReviewServices', [])

    .service('ReviewService', function(Common) {

        var addRating = function(req, callback) {
            var method = 'POST';
            var URL = "/api/rating";
            Common.callAPI(method,URL,req,function(response){
                if(response.data.status){
                    callback(null,response.data.message);
                }else{
                    callback(null,false);
                }
            });
        };
        var updateRating = function(ratingId,req, callback) {
            var method = 'PUT';
            var URL = "/api/rating/"+ratingId;
            Common.callAPI(method,URL,req,function(response){
                if(response.data.status){
                    callback(null,response.data.message);
                }else{
                    callback(null,false);
                }
            });
        };


        return {
            addRating: addRating,
            updateRating : updateRating
        }
    });