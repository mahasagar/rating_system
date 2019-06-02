angular.module('ReviewCrtl', [])
    .controller('reviewCtrl', function ($scope,$rootScope,$state,$stateParams,ReviewService,Main) {
        var userId = $stateParams.userId;
        var productId = $stateParams.productId;
        if(!productId){
            $state.go('app.home');
            return;
        }

        $scope.max = 5;
        $scope.ratingModel = { rating : 0};
        $scope.readonly = false;
        $scope.onHover = function(val){
            $scope.hoverVal = val;
        };
        $scope.onLeave = function(){
            $scope.hoverVal = null;
        }
        $scope.onChange = function(val){
            if(!$scope.ratingModel){
                $scope.ratingModel = {};
            }
            $scope.ratingModel.rating = val;
        }
        function getProduct(cb){
            var query ={};
            $scope.productData = null;
            Main.getProduct(productId,query,function (err,result) {
                  $scope.productData = result;
                  cb($scope.productData);
            });
        }
        function getUserRatings(productId){
            var query ={
               productId: productId,
               userId : userId
            };
            $scope.userRating = null;
            Main.getRatings(query,function (err,result) {
                 $scope.ratingModel = (result.response && result.response[0]) ? result.response[0] : {};

            });
        }
        getProduct(function(product){
            if(product){
                getUserRatings(product._id);
            }
        })

        $scope.addOrUpdateRating = function(oneRating){
            var oneRating = {
                orderId : userId,
                productId : productId,
                title : oneRating.title,
                rating : oneRating.rating,
                comment : oneRating.comment,
                userId : userId
            };
            if($scope.ratingModel && $scope.ratingModel._id){
                var ratingId = $scope.ratingModel._id;
                ReviewService.updateRating(ratingId,oneRating,function (err,result) {
                     $state.go('app.home');
                     $scope.ratingModel = { rating : 0};
                });
            }else{
                ReviewService.addRating(oneRating,function (err,result) {
                     $state.go('app.home');
                     $scope.ratingModel = { rating : 0};
                });
            }
        }
    });