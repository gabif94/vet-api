const {Router} = require('express')
const router = Router()
const {patients_all, patients_single} = require('../controllers/patients')
 
router.get('/', patients_all)
router.get('/:id', patients_single)

module.exports = router