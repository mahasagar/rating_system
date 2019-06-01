var requireDir = require('require-dir');
var controllers = requireDir('./controller/api');
var Common = require('./util/common');


module.exports.register = function (router) {
    router.route('/rating').post(Common.validateRequest,controllers.ratingAPI.addRating);
    router.route('/rating').get(Common.validateRequest,controllers.ratingAPI.getRatings);
    router.route('/rating/:id').put(Common.validateRequest,controllers.ratingAPI.updateRating);
};