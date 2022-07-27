import express from "express"
const app = express();

import { createQueryBuilder } from "typeorm";
import { Task_entry } from "../entities/Task_entry";

//require database connection
var path = require('path');
var parentDir = require('path').resolve(__dirname, '..')
const pool = require(parentDir + '\\db.ts');

const router = express.Router();

router.put('/api/put_task_entry', async (req,res) => {

   const comments      = req.body.comments;
   const task_entry_id = req.body.task_entry_id

   res.send(req.body)

// const update_task_entry = await createQueryBuilder(
//    'task_entry'
// )
// .update(Task_entry)
// .set({ comments: comments })
// .where("id = :id", { id: task_entry_id })

//return res.json(update_task_entry);

/* *** postgreSQL method

  const comments      = req.body.comments;
  const task_entry_id = req.body.task_entry_id

   const update_task_entry = await pool.query(
       'update task_entry set comments = $1 where id = $2 returning *'
      ,[comments,task_entry_id]
   )

   console.log(req.body)
   return res.send(req.body)
*/

})

export {router as updateTaskEntry}