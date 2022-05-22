const { body, param, query } = require('express-validator');
const middleware = require(core_path('middlewares/express.middleware.js'));


/**
 * Index validations
 *
 * @returns ExpressValidations
 */
exports.index = [
    query('page')
    .if(query('page').exists())
    .isNumeric().toInt()
    .withMessage('Dato inválido'),


    query('per_page')
    .if(query('per_page').exists())
    .isNumeric().toInt()
    .withMessage('Dato inválido'),


    query('all')
    .if(query('all').exists())
    .isNumeric().toInt()
    .withMessage('Dato inválido'),


    middleware
];


/**
 * Show validations
 *
 * @returns ExpressValidations
 */
exports.show = [
    param('id')
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isNumeric()
    .withMessage('Dato inválido').bail()
    .custom(value => { return !(value < 1 || value > 2147483647) })
    .withMessage('El valor debe ser de 1 a 2147483647'),


    middleware
];


/**
 * Store validations
 *
 * @returns ExpressValidations
 */
exports.store = [
    body('name')
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isLength({ min: 1, max: 128 })
    .withMessage('La longitud debe ser entre 1 y 128 caracteres'),


    body('username')
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isLength({ min: 1, max: 128 })
    .withMessage('La longitud debe ser entre 1 y 128 caracteres'),


    body('rating')
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isNumeric()
    .withMessage('Dato invalido'),


    body('score')
    .if(body('score').exists())
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isNumeric()
    .withMessage('Dato invalido'),


    body('assignees')
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isLength({ min: 1, max: 512 })
    .withMessage('La longitud debe ser entre 1 y 512 caracteres'),


    body('workflow')
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isLength({ min: 1, max: 512 })
    .withMessage('La longitud debe ser entre 1 y 512 caracteres'),


    middleware
];


/**
 * Update validations
 *
 * @returns ExpressValidations
 */
exports.update = [
    param('id')
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isNumeric()
    .withMessage('Dato inválido').bail()
    .custom(value => { return !(value < 1 || value > 2147483647) })
    .withMessage('El valor debe ser de 1 a 2147483647'),


    body('name')
    .if(body('name').exists())
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isLength({ min: 1, max: 128 })
    .withMessage('La longitud debe ser entre 1 y 128 caracteres'),


    body('username')
    .if(body('username').exists())
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isLength({ min: 1, max: 128 })
    .withMessage('La longitud debe ser entre 1 y 128 caracteres'),


    body('rating')
    .if(body('rating').exists())
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isNumeric()
    .withMessage('Dato invalido'),


    body('score')
    .if(body('score').exists())
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isNumeric()
    .withMessage('Dato invalido'),


    body('assignees')
    .if(body('assignees').exists())
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isLength({ min: 1, max: 512 })
    .withMessage('La longitud debe ser entre 1 y 512 caracteres'),


    body('workflow')
    .if(body('workflow').exists())
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isLength({ min: 1, max: 512 })
    .withMessage('La longitud debe ser entre 1 y 512 caracteres'),


    middleware
];


/**
 * Destroy validations
 *
 * @returns ExpressValidations
 */
exports.destroy = [
    param('id')
    .notEmpty()
    .withMessage('Campo requerido').bail()
    .isNumeric()
    .withMessage('Dato inválido').bail()
    .custom(value => { return !(value < 1 || value > 2147483647) })
    .withMessage('El valor debe ser de 1 a 2147483647'),


    middleware
];