const express = require('express');
const router = express.Router();
const {InvestorController, StartupperController} = require('../controllers/profileController.js')



router.post('/', InvestorController.create)
router.get('/', InvestorController.getAll)
router.delete('/:_id',InvestorController.delete)

router.post('/', StartupperController.create)
router.get('/', StartupperController.getAll)
router.delete('/:_id',StartupperController.delete)
module.exports = router