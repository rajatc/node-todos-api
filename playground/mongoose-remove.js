const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user.js');

//Todo.remove - Remove multiple records

// Todo.remove().then((result) => {
//     console.log(result)
// })

// Todo.findOneAndRemove()

// Todo.FindByIdAndRemove()

Todo.findOneAndRemove({_id: '59a80605eae91e0a06118456'}).then((todo) => {
    console.log(todo)
});

Todo.findByIdAndRemove('59a80605eae91e0a06118456').then((todo) => {
    console.log(todo);
});