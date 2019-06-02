angular.module('HomePage', [])
    .controller('homeCtrl', function ($scope,$rootScope,$state,Main) {
        console.log('homeCtrl')
        var userId = '5cf2b9f3a29308e6a7d04ddf';
        var productId = '5cf3354b618f59d3bb6c63de';
        function getProduct(cb){
            var query ={
               productId : "5cf3354b618f59d3bb6c63de"
            };
            $scope.productData = null;
            Main.getProduct(productId,query,function (err,result) {
                  $scope.productData = result;
                  cb($scope.productData);
            });
        }
        function getRatings(productId){
            var query ={
               productId: productId
            };
            $scope.ratings= [];
            Main.getRatings(query,function (err,result) {
                 $scope.ratings = result;
            });
        }
        getProduct(function(product){
            if(product){
                getRatings(product._id);
            }
        })

        $scope.addRating = function(oneRating){
            var oneRating = {
                rating : oneRating.rating,
                comment : oneRating.comment,
                userId : userId
            };
            Main.addRating(oneRating,function (err,result) {
                  $scope.message = result;
                  getRatings();
            });
        }
        $scope.writeReview = function(){
            $state.go('app.review',{productId :'5cf3354b618f59d3bb6c63de',userId: '5cf2b9f3a29308e6a7d04ddf'});
        }
    });