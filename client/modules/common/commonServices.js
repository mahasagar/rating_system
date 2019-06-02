
/*global moment*/
angular.module('commonServices', [])
    .filter('formatDate', function() {
        return function(input,format) {
            if (input !== null) {
                return  moment(input).format(format);
            }
        };
    })
    .directive('star', function () {
      return {
        template: '<ul class="rating" ng-mouseleave="leave()">' +
            '<li style="height: 28px;" ng-repeat="star in stars" ng-class="star" ng-click="click($index + 1)" ng-mouseover="over($index + 1)">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
          ratingValue: '=',
          max: '=',
          readonly: '@',
          onHover: '=',
          onLeave: '='
        },
        controller: function($scope){
          $scope.ratingValue = $scope.ratingValue || 0;
          $scope.max = $scope.max || 5;
          $scope.click = function(val){
            if ($scope.readonly && $scope.readonly === 'true') {
              return;
            }
            $scope.ratingValue = val;
          };
          $scope.over = function(val){
            $scope.onHover(val);
          };
          $scope.leave = function(){
            $scope.onLeave();
          }
        },
        link: function (scope, elem, attrs) {
          elem.css("text-align", "center");
          var updateStars = function () {
            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
              scope.stars.push({
                filled: i < scope.ratingValue
              });
            }
          };
          updateStars();

          scope.$watch('ratingValue', function (oldVal, newVal) {
            if (newVal) {
              updateStars();
            }
          });
          scope.$watch('max', function (oldVal, newVal) {
            if (newVal) {
              updateStars();
            }
          });
        }
      };
    })
    .directive('starRating', function () {
        return {
            restrict: 'A',
            template: '<ul class="rating">' +
                '<li ng-repeat="star in stars" ng-class="star">' +
                '\u2605' +
                '</li>' +
                '</ul>',
            scope: {
                ratingValue: '=',
                max: '='
            },
            link: function (scope, elem, attrs) {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            }
        }
    })
    .factory('Common', function ($http) {
        var common = {};
        common.callAPI = function(method,URL,param,callback) {
            if(method === "GET"){
                $http({
                    method: 'GET',
                    url: URL,
                    params : param
                }).then(function success(response) {
                    callback(response);
                }, function error(response) {
                    callback(null);
                });
            }else if(method === "POST") {
                $http.post( URL, param).then(function (data,error) {
                    if (error) {
                        callback(null);
                    } else {
                        callback(data);
                    }
                })
            }else if(method === "PUT") {
                 $http.put( URL, param).then(function (data,error) {
                     if (error) {
                         callback(null);
                     } else {
                         callback(data);
                     }
                 })
            }else{
                callback({error : 'No Method Found'});
            }
        };
        return common;
    });