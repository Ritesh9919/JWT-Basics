const express = require('express');
const router = express.Router();
const authApi = require('../controllers/auth');
const authenticate = require('../middleware/auth');

router.get('/dashboard', authenticate.authentication, authApi.dashBoard);
router.post('/log-in', authApi.create);

module.exports = router;