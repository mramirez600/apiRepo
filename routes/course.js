const express = require('express');
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse
} = require('../controllers/courses');

const Router = express.Router({ mergeParams: true });

Router.route('/')
  .get(getCourses)
  .post(addCourse);
Router.route('/:id')
  .get(getCourse)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = Router;
