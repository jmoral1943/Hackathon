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

router.get("/drill/:id", (req, res) => {
  Category.findById(ObjectId(req.params.id), (err, data) => {

    console.log(req.params.id);
    return res.json(data);
  });
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

// get all the workouts for a sport either a team or single player drill
router.get("/:sport/:type", (req, res) => {
  Workout.find({ sport: req.params.sport, type: req.params.type })
    .select({ name: 1, icon_url: 1, sets: 1, reps: 1, duration: 1 })
    .then(data => {
      return res.json(data);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
