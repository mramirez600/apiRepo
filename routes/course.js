const express = require('express');
const { getCourses, getCourse, addCourse } = require('../controllers/courses');

const Router = express.Router({ mergeParams: true });

Router.route('/')
  .get(getCourses)
  .post(addCourse);
Router.route('/:id').get(getCourse);

module.exports = Router;
