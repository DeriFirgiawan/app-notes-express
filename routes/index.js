const express = require('express');
const controllers = require('../controllers');
const router = express();

router.get('/', controllers.getAllNotes);
router.get('/create-note', controllers.handleGetCreateNote);
router.post('/create-note', controllers.handlePostCreateNote);
router.get('/detail-note/:id', controllers.detailNoteById);
router.delete('/:id', controllers.deleteNoteById);

module.exports = router;
