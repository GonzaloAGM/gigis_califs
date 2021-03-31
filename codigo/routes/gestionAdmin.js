const express = require('express');
const router = express.Router();

const path = require('path');

const bodyParser = require('body-parser');

router.use('/', (request, response, next) => {
    response.send('En construcción');
    response.status(200);
});

module.exports = router;