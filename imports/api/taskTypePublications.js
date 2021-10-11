import { Meteor } from 'meteor/meteor';
import { TaskType } from '/imports/db/TaskType';

Meteor.publish('tasktypes', function publishTaskTypes() {
  return TaskType.find({ userId: this.userId });
});