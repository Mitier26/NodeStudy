const express = require('express');
const taskController = require('../controller/task.controller');
const router = express.Router();

router.post("/", taskController.createTask);

// router.get("/", (req, res) => {
//     res.send('get tasks');
// })

router.get("/", taskController.getTask);

router.put('/:id', taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;