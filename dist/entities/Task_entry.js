"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task_entry = void 0;
const typeorm_1 = require("typeorm");
const Project_1 = require("./Project");
const Task_1 = require("./Task");
// export enum TransactionTypes {
//     DEPOSIT = 'deposit',
//     WITHDRAW = 'withdraw' // enum is our own categorised types list
// } @Column ({type:"enum",enum:TransactionTypes})
let Task_entry = class Task_entry extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Task_entry.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Task_entry.prototype, "hours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Task_entry.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task_entry.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Project_1.Project, project => project.task_entry),
    (0, typeorm_1.JoinColumn)({
        name: 'project_id'
    }),
    __metadata("design:type", Project_1.Project)
], Task_entry.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Task_1.Task, task => task.task_entry),
    (0, typeorm_1.JoinColumn)({
        name: 'task_id'
    }),
    __metadata("design:type", Task_1.Task)
], Task_entry.prototype, "task", void 0);
Task_entry = __decorate([
    (0, typeorm_1.Entity)('task_entry') //declare the table
], Task_entry);
exports.Task_entry = Task_entry;
