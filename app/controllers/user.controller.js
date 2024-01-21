const db = require(database_path('models'));
const User = db.User;


/**
 * Returns a resources list from storage.
 * 
 * @param int page
 * @param int per_page
 * @param int all
 *
 * @returns JsonResponse
 */
exports.index = async (req, res) => {
    let page = req.query.page ? req.query.page : 1;
    let per_page = req.query.per_page ? req.query.per_page : 20;
    let all = req.query.all ? req.query.all : 0;


    let options = {};
    options['offset'] = (page - 1) * per_page;
    options['limit'] = per_page;


    if (all === 1) options = {};


    options['attributes'] = ['id', 'name', 'email', 'createdAt'];
    options['where'] = {};


    const { count, rows } = await User.findAndCountAll(options);


    let data = {
        pagination: {
            page,
            per_page,
            total: count,
            count: rows.length
        },
        records: rows
    };


    return Response.success(res, data);
};


/**
 * Show a specific resource from storage.
 *
 * @param int id
 *
 * @returns JsonResponse
 */
exports.show = async (req, res) => {
    const id = req.params.id;
    let options = { where: { id } };


    User.findOne(options).then(async (data) => {
        return Response.success(res, data);
    }).catch(err => {
        return Response.error(res, err);
    });
}


/**
 * Store a new resource
 *
 * @param int id
 *
 * @returns JsonResponse
 */
exports.store = async (req, res) => {
    const id = req.params.id;
    let values = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };


    User.create(values).then(async (data) => {
        return Response.success(res, data);
    }).catch(err => {
        return Response.error(res, err);
    });
}


/**
 * Update a specific resource from storage.
 *
 * @param int id
 *
 * @returns JsonResponse
 */
exports.update = async (req, res) => {
    const id = req.params.id;
    let values = {
        name: req.body.name ? req.body.name : undefined,
        email: req.body.email ? req.body.email : undefined,
        password: req.body.password ? req.body.password : undefined,
    };
    let options = { where: { id } };


    User.update(values, options).then(async (data) => {
        return Response.success(res, data);
    }).catch(err => {
        return Response.error(res, err);
    });
}


/**
 * Removes a specific resource from storage.
 *
 * @param int id
 *
 * @returns JsonResponse
 */
exports.destroy = async (req, res) => {
    const id = req.params.id;
    let options = { where: { id } };


    User.destroy(options).then(async (deleted) => {
        return Response.success(res, deleted);
    }).catch(err => {
        return Response.error(res, err);
    });
}
