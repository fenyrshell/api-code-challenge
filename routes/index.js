const express = require('express');
const cors = require('cors');
const config = require(config_path('index'));
const router = require('express').Router();


routes = function (app) {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Access-Control-Allow-Credentials', true);
        next();
    });


    router.group('/api/v1', (router) => {
        router.get('/', async (req, res) => {
            return Response.success(res, {
                name: config.api.name,
                message: 'API is online'
            });
        });


        router.use(require('./ideas.route'));
    });


    app.use(router);
    app.use('*', async (req, res) => { return Response.notFound(res); });
}
