const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // Log to console
  console.log(err.stack.red);

  console.log(err.name);

  // Mongoose bad ObjectID
  if (err.name === 'CastError') {
    const message = `Bootcamp not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  res
    .status(error.statuseCode || 500)
    .json({ success: false, error: error.message || 'Server error' });
};

module.exports = errorHandler;
