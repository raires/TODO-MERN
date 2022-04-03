import mongoose from "mongoose";
import TodoModel from "../models/todoModel.js";

export const getTodos = async (req, res) => {
    try {
        const todos = await TodoModel.find(/*{ isDeleted: false }*/);
        console.log(todos);
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await PostMessage.findById(id);
        
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


export const createTodo = (req, res) => {
    try {
        const todo = new TodoModel(req.body);
        console.log(req.body);

        todo.save();
        
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updateTodo = async (req, res) => {
    try {
        const { id: _id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).send("Invalid ID");
        }

        req.body.updatedAt = new Date();

        const updatedTodo = await TodoModel.findByIdAndUpdate(_id, { ...req.body, _id }, { new: true });

        res.send(updatedTodo);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const { id: _id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).send("Invalid ID");
        }

        await TodoModel.findByIdAndDelete(_id);

        res.json({message: 'TODO deleted successfully'});
    } catch (error) {
        res.status(500).send(error.message);
    }
};