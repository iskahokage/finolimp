const express = require('express');
const router = express.Router();
const {InvestorController, StartupperController} = require('../controllers/profileController.js')
const authMiddleware = require('./../middlewares/authMiddleware.js')


router.post('/investor', authMiddleware, InvestorController.create)
router.get('/investor', InvestorController.getAll)
router.delete('/investor/:id',InvestorController.delete)

router.post('/startupper', StartupperController.create)
router.get('/startupper', StartupperController.getAll)
router.delete('/startupper/:id',StartupperController.delete)
module.exports = router