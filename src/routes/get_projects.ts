import  express   from "express";
import { Project } from "../entities/Project";


const router = express.Router();

router.get('/api/projects', async (req, res) => {
  const project = await Project.find();

  return res.json(project);
})

export { router as fetchProjectsRouter }