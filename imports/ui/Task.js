import { Template } from 'meteor/templating';
import './Task.html';

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setIsChecked', this.task._id, !this.task.isChecked)
  },
  'click .delete'() {
    Meteor.call('tasks.remove', this.task._id);
  },
});