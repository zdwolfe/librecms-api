module.exports.init = function(app) {
  var CourseCtrl = require('./Course');
  CourseCtrl.init(app);
  var UserCtrl = require('./User');
  UserCtrl.init(app);
  var AssignmentSubmissionCtrl = require('./AssignmentSubmission');
  AssignmentSubmissionCtrl.init(app);
};
