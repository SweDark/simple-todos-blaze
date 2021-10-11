import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '/imports/db/TasksCollection';
import { TaskType } from '/imports/db/TaskType';
import '/imports/api/tasksMethods';
import '/imports/api/tasksPublications';
import '/imports/api/taskTypeMethods';
import '/imports/api/taskTypePublications';

// const insertTask = (taskText, user) =>
//   TasksCollection.insert({
//     text: taskText,
//     userId: user._id,
//     createdAt: new Date(),
//   });

  // const insertTaskType = (taskTypeText, user) =>
  // TaskType.insert({
  //   text: taskTypeText,
  //   userId: user._id,
  //   createdAt: new Date(),
  // });

  const SEED_USERNAME = 'meteorite';
  const SEED_PASSWORD = 'password';
  
  Meteor.startup(() => {
    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
      Accounts.createUser({
        username: SEED_USERNAME,
        password: SEED_PASSWORD,
      });
    }

  const user = Accounts.findUserByUsername(SEED_USERNAME);

  // if (TasksCollection.find().count() === 0) {
  //   [
  //     'First Task',
  //     'Second Task',
  //     'Third Task',
  //     'Fourth Task',
  //     'Fifth Task',
  //     'Sixth Task',
  //     'Seventh Task',
  //   ].forEach(taskText => insertTask(taskText, user));
  // }
});