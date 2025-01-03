const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers');
const router = express.Router();

// get all workouts
router.get('/', getWorkouts);

// get a specific route
router.get('/:id', getWorkout);

// POST a new route
router.post('/', createWorkout);

// DELETE a route
router.delete('/:id', deleteWorkout);

// UPDATE a route
router.patch('/:id', updateWorkout);

module.exports = router;