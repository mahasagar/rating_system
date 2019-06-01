/**
 * Created by medibox on 5/1/18.
 */


'use strict';

var apiParamValidation = require('./../validation/apiParamValidation');
var Ajv = require('ajv');
var ajv = new Ajv();

async function validateRequest(req,res,next) {
    var params = null;
    if(req.method === 'GET'){
        params = req.query;
    }else if(req.method === 'POST'){
        params = req.body;
    }
    var route = req.route.path.split('/');
    route = route[1].toUpperCase();
    var schema = apiParamValidation[route][req.method];
    var valid = await ajv.validate(schema, params);
    if (!valid) {
        var result = {
            status : false
        };
        var errorMessage = 'Unknown Error(Wrong paramters)';
        if(ajv.errors && ajv.errors[0] ){
            errorMessage =  ajv.errors[0].message;
            if(ajv.errors[0].dataPath && ajv.errors[0].dataPath !== ''){
                errorMessage = errorMessage + ' in \'' + ajv.errors[0].dataPath +'\'';
            }
        }
        result.message = errorMessage;
        res.status(400);
        res.json(result);
    }else{
        next();
    }
}

exports.validateRequest = validateRequest;