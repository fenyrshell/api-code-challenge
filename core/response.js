/**
 * Returns a Bad Request Response
 *
 * @param {*} res
 * @param {*} errors
 *
 * @returns JsonResponse
 */
exports.badRequest = (res, errors = []) => {
    return res.status(400).json({
        status: 400,
        code: 'RES_ERRO_BAD_REQUEST',
        message: 'Bad Request',
        messageDetail: 'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
        errors: errors
    });
}


/**
 * Returns a Not Found Response
 *
 * @param {*} res
 *
 * @returns JsonResponse
 */
exports.notFound = (res) => {
    return res.status(404).json({
        status: 404,
        code: 'RES_ERRO_NOT_FOUND',
        message: 'Not Found',
        messageDetail: 'The server can not find the requested resource.'
    });
}


/**
 * Returns a OK Response
 *
 * @param {*} res
 * @param {*} data
 * @param {*} messageDetail
 * @param {*} message
 * @param {*} code
 *
 * @returns JsonResponse
 */
exports.success = (res, data = null, messageDetail = 'The request has been successful', message = 'OK', code = 'RES_SUCC_OK') => {
    return res.status(200).json({
        status: 200,
        code: code,
        message: message,
        messageDetail: messageDetail,
        data: data
    });
}


/**
 * Returns a Error Response
 *
 * @param {*} res
 * @param {*} errors
 * @param {*} messageDetail
 * @param {*} message
 * @param {*} code
 *
 * @returns JsonResponse
 */
exports.error = (res, errors = null, messageDetail = 'The request has failed', message = 'Error', code = 'RES_ERRO_INTERNAL_SERVER_ERROR') => {
    return res.status(500).json({
        status: 500,
        code: code,
        message: message,
        messageDetail: messageDetail,
        errors: errors
    });
}
