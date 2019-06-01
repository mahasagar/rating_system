var requireDir = require('require-dir');
var controllers = requireDir('./controller/api');

module.exports.register = function (router) {

    router.route('/rating').post(controllers.ratingAPI.addRating);
    router.route('/rating').get(controllers.ratingAPI.getRatings);

};