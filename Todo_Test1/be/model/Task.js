const mongoose = require("mongoose");

const Schema = mongoose.Schema

const taskSchema = Schema({
    task: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
        required: true,
    }
}, { timestamps: true })

// 실질적으로 사용할 모델
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;