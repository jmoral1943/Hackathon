const router = require("express").Router();
const Workout = require("../models/workout.model");
const Category = require("../models/category.model");

// Adds a workout
router.post("/add", (req, res) => {
  Workout.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(404).json(err));
});

// Adds a category to a sport
router.post("/categories/add", (req, res) => {
  Category.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(404).json(err));
});

// Returns all the workouts for a given sport
router.get("/:sport", (req, res) => {
  Workout.find({ sport: req.params.sport })
    .then(data => {
      if (data.length === 0) {
        return res.json("There is no sport like that");
      }
      returnres.json(data);
    })
    .catch(err => res.status(404).json(err));
});

// gets all the categories
router.get("/:sport/categories", (req, res) => {
  Category.find({ sport: req.params.sport })
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});

router.get("/:sport/catalog", (req, res) => {
  Workout.find({ sport: req.params.sport })
    .select({"name": 1, "icon_url": 1, "sets": 1, "reps": 1, "duration": 1})
    .then(data => {
      return res.json(data);
    });
});
module.exports = router;
