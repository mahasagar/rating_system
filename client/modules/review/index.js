angular.module('appReview', ['ReviewCrtl','ReviewServices'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('app.review', {
                url: "/review",
                controller:'reviewCtrl',
                templateUrl: "modules/review/template/review.html",
                params: {
                    productId : null,
                    userId : null
                }
            })
    });
