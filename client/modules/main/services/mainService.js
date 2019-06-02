angular.module('mainServices', [])

    .service('Main', function(Common) {

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

        var getRatings = function(req, callback) {
            var method = 'GET';
            var URL = "/api/rating";
            Common.callAPI(method,URL,req,function(response){
                if(response.data.status){
                    callback(null,response.data);
                }else{
                    callback(null,false);
                }
            });
        };

        var getProduct = function(productId,req, callback) {
            var method = 'GET';
            var URL = "/api/product/"+productId;
            Common.callAPI(method,URL,req,function(response){
                if(response.data.status){
                    callback(null,response.data.response);
                }else{
                    callback(null,false);
                }
            });
        };

        return {
            addRating: addRating,
            getRatings : getRatings,
            getProduct : getProduct
        }
    });