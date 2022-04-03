import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date
});

const TodoModel = mongoose.model("TODO", todoSchema);

export default TodoModel;