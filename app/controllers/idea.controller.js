const db = require(database_path('models'));
const Idea = db.Idea;


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


    options['attributes'] = ['id', 'name', 'image', 'username', 'rating', 'score', 'assignees', 'workflow', 'createdAt'];
    options['where'] = {};


    const { count, rows } = await Idea.findAndCountAll(options);


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


    Idea.findOne(options).then(async (data) => {
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
        username: req.body.username,
        rating: req.body.rating,
        score: req.body.score ? req.body.score : 0,
        assignees: req.body.assignees,
        workflow: req.body.workflow
    };


    Idea.create(values).then(async (data) => {
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
        username: req.body.username ? req.body.username : undefined,
        rating: req.body.rating ? req.body.rating : undefined,
        score: req.body.score ? req.body.score : undefined,
        assignees: req.body.assignees ? req.body.assignees : undefined,
        workflow: req.body.workflow ? req.body.workflow : undefined
    };
    let options = { where: { id } };


    Idea.update(values, options).then(async (data) => {
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


    Idea.destroy(options).then(async (deleted) => {
        return Response.success(res, deleted);
    }).catch(err => {
        return Response.error(res, err);
    });
}
