import {check} from 'meteor/check';
import {TasksCollection} from '../db/TasksCollection';

Meteor.methods({
    'tasks.insert'(text, TaskType){
        check(text, String);
        check(TaskType, String);

        if(!this.userId){
            throw new Meteor.Error('Not authorized.');
        }
        TasksCollection.insert({
            text,
            createdAt: new Date,
            userId: this.userId,
            taskTypeId: TaskType,
        })
    },
    'tasks.remove'(taskId){
        check(taskId, String);
        if(!this.userId){
            throw new Meteor.Error('Not authorized.');
        }
        const task = TasksCollection.findOne({_id: taskId, userId: this.userId});

        if(!task){
            throw new Meteor.Error(taskId);
        }
        TasksCollection.remove(taskId);
    },
    'tasks.setIsChecked'(taskId, isChecked){
        check(taskId, String);
        check(isChecked, Boolean);
        if(!this.userId){
            throw new Meteor.Error('Not authorized.');
        }

        const task = TasksCollection.findOne({ _id: taskId, userId: this.userId });

        if (!task) {
            throw new Meteor.Error('Access denied.');
        }

        TasksCollection.update(taskId, {
            $set: {
                isChecked
            }
        });
    }
});