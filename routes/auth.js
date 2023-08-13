const express = require('express');
const router = express.Router();
const authApi = require('../controllers/auth');
router.get('/', authApi.jwtAuth);

module.exports = router;