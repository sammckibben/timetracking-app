import  express  from "express";
import { createQueryBuilder } from "typeorm";
import { Task_entry } from "../entities/Task_entry";

const router = express.Router();

router.get('/api/task_entries', async (req, res) => {
  const task_entry = await createQueryBuilder(
      'task_entry'
  )
  .select('tske')
  .from(Task_entry,'tske')
  .where('tske.project_id = :project_id', {project_id: 1})
  .getMany()

  return res.json(task_entry);
})

export { router as fetchTaskEntryRouter }