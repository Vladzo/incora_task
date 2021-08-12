const router = require('express').Router();

const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

router.post('/', userMiddleware.checkCreateUserValidity, userMiddleware.canUserRegister, userController.createUser);

router.get('/:userId', userMiddleware.getUserById, userController.getUser);

router.put('/:userId', userMiddleware.checkUpdateUserValidity, userMiddleware.getUserById, userController.updateUser);

module.exports = router;
