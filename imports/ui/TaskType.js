import { Template } from 'meteor/templating';
import './TaskType.html';

Template.tasktype.events({
  'click .delete'() {
    Meteor.call('tasktypes.remove', this._id);
  },
});