const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the campsites to you');
    })
    .post((req, res) => {
        res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /campsites');
    })
    .delete((req, res) => {
        res.end('Deleting all campsites');
    });

campsiteRouter.route('/:campsiteId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send the details of campsites: ${req.params.campsiteId} to you`);
    })
    .post((req, res) => {
        res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`Updating the campsite: ${req.params.campsiteId}\nWill update the campsite: ${req.body.name}\n      with ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting campsite: ${req.params.campsiteId}`);
    });

module.exports = campsiteRouter;