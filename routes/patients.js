const {Router} = require('express')
const router = Router()
const {all} = require('../controllers/patients')
 
router.get('/', all)

module.exports = router