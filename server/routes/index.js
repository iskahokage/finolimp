const express = require('express');

const router = express.Router();

const servicesRoute = require('./servicesRoute.js')

const messageRoute = require('./messageRoute.js')

const authRoute = require('./authRoute.js')

const postRoute = require('./postRoute.js')

const productRoute = require('./productRoute.js')

const appealRoute = require('./appealRoute.js')

const profileRoute = require('./profileRoute.js')

router.use('/', authRoute)
router.use('/services', servicesRoute);
router.use('/messages', messageRoute);
router.use('/posts', postRoute);
router.use('/products', productRoute)
router.use('/appeals', appealRoute)
router.use('/profile', profileRoute)

module.exports = router;