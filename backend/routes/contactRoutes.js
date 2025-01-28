
const express = require('express');
const { createContactDetails,getAllEnquery,deleteEnquery  } = require('../controllers/contactController');

const router = express.Router();

router.post('/', createContactDetails);
router.get("/",getAllEnquery)
router.delete('/:id', deleteEnquery);


module.exports = router;
