const { validationResult } = require('express-validator');


/**
 * Express Validator Result Middleware
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 *
 * @returns void
 */
module.exports = (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) return Response.badRequest(res, err.errors);


    next();
}
