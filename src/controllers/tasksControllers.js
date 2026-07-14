const tasksModel = require('../models/tasksModel')

const getAll = async (_req , res) => {

    const tasks = await tasksModel.getAll();

    return res.status(200).json(tasks);
};

const createTask = async (re , resp) => {
   const createdTask = await tasksModel.createTask(re.body);
   return resp.status(201).json(createdTask);
};
const deleteTask = async (req , resp) => {
    const {id} = req.params;

    await tasksModel.deletetask(id);
    return resp.status(204).json();
}

const updateTask = async (req, resp) => {
     const {id} = req.params;

     await tasksModel.updateTask(id, req.body)
     return resp.status(204).json()
}
module.exports = {
    getAll ,
    createTask ,
    deleteTask,
    updateTask,
};