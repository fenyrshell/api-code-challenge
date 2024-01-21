const db = require(database_path('models'));
const News = db.News;


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


    options['attributes'] = ['id', 'title', 'description', 'image'];
    options['where'] = {};


    const { count, rows } = await News.findAndCountAll(options);


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


    News.findOne(options).then(async (data) => {
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
        title: req.body.title,
        description: req.body.description,
        image: req.body.image
    };


    News.create(values).then(async (data) => {
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
        title: req.body.title ? req.body.title : undefined,
        description: req.body.description ? req.body.description : undefined,
        image: req.body.image,
    };
    let options = { where: { id } };


    News.update(values, options).then(async (data) => {
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


    News.destroy(options).then(async (deleted) => {
        return Response.success(res, deleted);
    }).catch(err => {
        return Response.error(res, err);
    });
}
