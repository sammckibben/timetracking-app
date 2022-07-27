
const express                   = require('express'); // requires the library
const app                       = express();  // runs the express library
const port                      = 3000;
const bodyParser                = require('body-parser');
const urlencodedParser          = bodyParser.urlencoded({ extended: false });
const {check, validationResult} = require('express-validator');

import { nextTick } from "process";
import {createConnection} from "typeorm"
import { Project } from "./entities/Project"
import { Task } from "./entities/Task"
import { Task_entry } from "./entities/Task_entry"
import { deleteTaskEntryRouter } from "./routes/delete_task_entry";
import { fetchProjectsRouter } from "./routes/get_projects";
import { fetchTasksRouter } from "./routes/get_tasks";
import { fetchTaskEntryRouter } from "./routes/get_task_entry";
import { fetchTestRouter } from "./routes/get_test";
import { updateTaskEntry } from "./routes/put_task_entry";

const pool = require("./db");

const main = async () => {
  try {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'sam',
    password: 'sam',
    database: 'task_tracker',
    entities: [Project , Task , Task_entry],
    synchronize: true
  })
  console.log('Connected to Postgres')
  } catch (error) {
    console.error('Unable to connect to Postgres')
  }
}

console.log('dirname is ...')
console.log(__dirname)
console.log('Create Database Connection...')
main();

//middleware
app.use(bodyParser.json()); //this gives us access to request.body so that we can get JSON data
app.use(urlencodedParser); 
app.use(express.static(__dirname + '/public'));

app.use(fetchProjectsRouter);
app.use(fetchTasksRouter);
app.use(fetchTestRouter)
app.use(fetchTaskEntryRouter)
app.use(deleteTaskEntryRouter)
app.use(updateTaskEntry)

console.log('This is app.ts')

app.listen(port, ()=>{ console.log('Server listening on port 3000')});
//We have to listen in order for our server to start