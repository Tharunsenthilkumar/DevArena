const express = require('express');
const router = express.Router();
const problemController = require('../controllers/problemController');
const auth = require('../middleware/auth');

router.get('/', problemController.getProblems);
router.get('/:id', problemController.getProblemById);
router.post('/', auth, problemController.createProblem); // Ideally only admin

module.exports = router;
