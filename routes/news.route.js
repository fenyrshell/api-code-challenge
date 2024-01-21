var router = require('express').Router();
const controller = require(app_path('controllers/news.controller.js'));
const validation = require(app_path('validations/news.validation.js'));


router.group('/news', (router) => {
    router.get('/', validation.index, controller.index);
    router.get('/:id', validation.show, controller.show);
    router.post('/', validation.store, controller.store);
    router.put('/:id', validation.update, controller.update);
    router.delete('/:id', validation.destroy, controller.destroy);
});


module.exports = router;
