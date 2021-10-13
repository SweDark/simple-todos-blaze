import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '/imports/db/TasksCollection';
import { TaskType } from '/imports/db/TaskType';
import '/imports/api/tasksMethods';
import '/imports/api/tasksPublications';
import '/imports/api/taskTypeMethods';
import '/imports/api/taskTypePublications';

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
});