
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

// Route for creating a new event
router.post('/', authMiddleware.authenticateUser, eventController.createEvent);

// Route for fetching all events
router.get('/', eventController.getEvents);

// Route for fetching a specific event by ID
router.get('/:id', eventController.getEventById);

// Route for updating an event by ID
router.put('/:id', authMiddleware.authenticateUser, eventController.updateEvent);

// Route for deleting an event by ID
router.delete('/:id', authMiddleware.authenticateUser, eventController.deleteEvent);

module.exports = router;