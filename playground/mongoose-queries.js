const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user.js');

// var id = "59a6a7e9ca863034b0351917";

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todos', todo);
// }).catch((e) => console.log(e));

var id = "59a54d8bf8547a2a4011e309";

User.findById(id).then((user) => {
    if(!user){
        return console.log('User Id not found');
    }
    console.log('User :', user);
}).catch((e)=> console.log(e));