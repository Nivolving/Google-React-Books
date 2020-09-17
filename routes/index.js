const router = require('express').Router();
const { Book } = require('../models');

// Create
router.post("/books", (req, res) => {

    Book.create( req.body )
        .then( dbBook => {
            res.json( dbBook );
        })
        .catch( err => {
            res.status(401).json(err);
        });

});

// Delete
router.delete("/books/:id", (req, res) => {

    Book.findByIdAndDelete(req.params.id)
        .then( dbBook => {
            res.json(dbBook);
        })
        .catch( err => {
            res.status(401).json(err);
        });;

});

// Get all
router.get("/books", (req, res) => {

    Book.find()
        .then( dbBooks => {
            res.json(dbBooks);
        })
        .catch( err => {
            res.status(401).json(err);
        });

});

module.exports = router;