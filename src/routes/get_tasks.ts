import  express  from "express";
import { Task } from "../entities/Task";

const router = express.Router();

var path = require('path');
var parentDir = require('path').resolve(__dirname, '..')
const pool = require(parentDir + '\\db.ts');

router.get('/api/tasks', async (req, res) => {
//  const task = await Task.find();

 const task = await pool.query('select * from task')

  return res.send(task.rows);
})

export { router as fetchTasksRouter }