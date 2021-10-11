import {check} from 'meteor/check';
import {TaskType} from '../db/TaskType';

Meteor.methods({
    'tasktypes.insert'(text){
        check(text, String);

        if(!this.userId){
            throw new Meteor.Error('Not authorized.');
        }
        TaskType.insert({
            text,
            createdAt: new Date,
            userId: this.userId,
        })
    },
    'tasktypes.remove'(taskTypeId){
        check(taskTypeId, String);
        if(!this.userId){
            throw new Meteor.Error('Not authorized.');
        }
        const task = TaskType.findOne({_id: taskTypeId, userId: this.userId});

        if(!task){
            throw new Meteor.Error(taskTypeId);
        }
        TaskType.remove(taskTypeId);
    },
});