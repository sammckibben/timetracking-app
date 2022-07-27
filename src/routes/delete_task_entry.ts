import express from "express";
import { Task_entry } from "../entities/Task_entry";

const router = express.Router()

router.delete('/api/delete_task_entry/:taskEntryId', async (req,res) => {
   
  const { taskEntryId } = req.params;
  
  console.log(req.params); 

  const response = await Task_entry.delete(parseInt(taskEntryId)) 

   return res.json(response);
})

export {router as deleteTaskEntryRouter}