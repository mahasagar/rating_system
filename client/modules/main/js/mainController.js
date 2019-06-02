angular.module('HomePage', [])
    .controller('homeCtrl', function ($scope,$rootScope,$state,Main) {
        console.log('homeCtrl')
        var userId = '5cf2bb2ca29308e6a7d04de1';
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
                if(result){
                    $scope.ratings = result.response;
                    $scope.count = result.count;
                    $scope.avgRating = result.avgRating;
                }
            });
        }
        getProduct(function(product){
            if(product){
                getRatings(product._id);
            }
        })
        $scope.onHover = function(val){
            $scope.hoverVal = val;
        };
        $scope.onLeave = function(){
            $scope.hoverVal = null;
        }
        $scope.onChange = function(val){
            $scope.avgRating = val;
        }
        $scope.writeReview = function(){
            $state.go('app.review',{productId : productId,userId: userId});
        }
    });