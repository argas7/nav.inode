const { Router } = require('express');

const userController = require('../controllers/user.controller');

const router = Router();

router.route('/users').post(userController.create);
router.route('/users').get(userController.read);
router.route('/users/:id').put(userController.update);
router.route('/users/:id').delete(userController.destroy);

module.exports = router;
