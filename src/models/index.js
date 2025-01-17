const { Schema, model } = require('mongoose')

const toDoList = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['pending', 'done'], default: 'pending', required: true },
    createdAt: { type: Date, default: Date.now },
    deadline: {type: Date, required: true}
})

const tasks = model('tasks', toDoList)
module.exports = tasks