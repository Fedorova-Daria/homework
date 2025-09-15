import User from './user.js';
import Task from './task.js';

const codingTask = new Task('...писать код');

const developer = new User(codingTask);

developer.do();
