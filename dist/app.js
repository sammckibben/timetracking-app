"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const { check, validationResult } = require('express-validator');
const typeorm_1 = require("typeorm");
const Project_1 = require("./entities/Project");
const Task_1 = require("./entities/Task");
const Task_entry_1 = require("./entities/Task_entry");
const get_projects_1 = require("./routes/get_projects");
const get_tasks_1 = require("./routes/get_tasks");
const get_test_1 = require("./routes/get_test");
const pool = require("./db");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, typeorm_1.createConnection)({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: 'sam',
            password: 'sam',
            database: 'task_tracker',
            entities: [Project_1.Project, Task_1.Task, Task_entry_1.Task_entry],
            synchronize: true
        });
        console.log('Connected to Postgres');
    }
    catch (error) {
        console.error('Unable to connect to Postgres');
    }
});
console.log('Create Database Connection...');
main();
app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(express.static(__dirname + '/public'));
app.use(get_projects_1.fetchProjectsRouter);
app.use(get_tasks_1.fetchTasksRouter);
app.use(get_test_1.fetchTestRouter);
console.log('This is app.ts');
app.get("/", function (req, res) {
    console.log('hello GET sam');
    res.sendFile(__dirname + "/index.html");
});
app.post('/formData', urlencodedParser, check('application').isLength({ min: 3 }).withMessage('Application needs atleast two characters').trim(), check('task').not().isEmpty().withMessage('Task must have a value'), check('duration')
    .custom(val => {
    if (val > 0) {
        return true;
    }
    else {
        return false;
    }
}).withMessage('Duration must have a value'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = validationResult(req);
    console.log('hello Post Samuel ');
    // console.log('Headers')
    // console.log(req.headers)
    console.log('Body');
    console.log(req.body);
    console.log(req.body.duration);
    console.log(req.body.date);
    console.log(req.body.comments);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    else {
        console.log('Insert into task_entry');
        try {
            var duration = req.body.duration;
            var date = req.body.date;
            var comments = req.body.comments;
            const insert_task_entry = yield pool.query("insert into task_entry (project_id,task_id,hours,date,comments) values (1,1,1,$1,$2) returning *", [date, comments]);
        }
        catch (err) {
            console.error(err.message);
            console.error('There was an error while inserting');
        }
        return res.status(202).json({ success: 'Yes' });
    }
}));
app.listen(port, () => { console.log('Server listening on port 3000'); });
