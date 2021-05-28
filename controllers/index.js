const Notes = require('../models');

exports.getAllNotes = (req, res) => {
  const AllNotes = Notes.find({}, function(err, notes) {
    if (err) throw err;
    res.render('index', {
      allNote: notes
    });
  });
}

exports.handleGetCreateNote = (req, res) => {
  res.render('createNote');
}

exports.handlePostCreateNote = (req, res) => {
  const data = new Notes();
  data.title = req.body.title;
  data.author = req.body.author;
  data.body = req.body.body;
  switch("") {
    case data.title:
      res.status(400);
      res.render('createNote');
      break;
    case data.author:
      res.status(400);
      res.render('createNote');
      break;
    case data.body:
      res.status(400);
      res.render('createNote');
      break;
  }

  data.save(err => {
    if (err) return console.log(err);
    res.status(201);
    res.redirect('/');
  });
}

exports.detailNoteById = (req, res) => {
  const id = req.params.id;
  const detailNoteId = Notes.findById(id, function(err, noteById) {
    if (err) throw err;
    res.render('detail', {
      detailNoteId: noteById
    });
  });
}

exports.deleteNoteById = (req, res) => {
  const id = req.params.id;
  console.log(id);
}
