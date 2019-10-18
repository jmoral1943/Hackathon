const router = require("express").Router();
let Sport = require("../models/sport.model");

router.get("/", (req, res) => {
  Sport.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});

router.post("/add", (req, res) => {
  Sport.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
