// Example validation function for event data
exports.validateEventData = (data) => {
    const { title, description, date, time, location, category, capacity, registrationDeadline } = data;
    const errors = [];

    if (!title || typeof title !== 'string') {
        errors.push('Title is required and must be a string');
    }

    // Add validation checks for other fields as needed...

    if (errors.length > 0) {
        throw { message: 'Validation error', errors };
    }
};