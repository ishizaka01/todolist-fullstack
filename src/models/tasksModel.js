const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) => {

    const { title } = task;

    const dateUTC = new Date().toUTCString();

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';

    const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC]);

    return { insertId: createdTask.insertId };
};

const deletetask = async (id) => {
    const removedtask = await connection.execute('DELETE FROM tasks WHERE id = ?' , [id])
    return removedtask
};

const updateTask = async (id, task) => {
    const {titulo, status} = task;
    
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ? ';

    const [updatedTask] = await connection.execute(query, [title, status, id])
    return removedtask
};

module.exports = {
    getAll,
    createTask,
    deletetask,
    updateTask,
};