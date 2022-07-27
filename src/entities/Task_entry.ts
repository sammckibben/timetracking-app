import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import { Project } from "./Project"
import { Task } from "./Task";

// export enum TransactionTypes {
//     DEPOSIT = 'deposit',
//     WITHDRAW = 'withdraw' // enum is our own categorised types list
// } @Column ({type:"enum",enum:TransactionTypes})

@Entity('task_entry') //declare the table
export class Task_entry extends BaseEntity {
 
 @PrimaryGeneratedColumn()
 id: number;

 @Column()
 project_id: number;

 @Column()
 task_id: number;

 @Column()
 hours: number;

 @Column()
 date: Date;

 @Column()
 comments: string;

 @ManyToOne(
     () => Project,
     project => project.task_entry
 )
 @JoinColumn({
     name: 'project_id'
 })
  project: Project

@ManyToOne(
    () => Task,
    task => task.task_entry
)
@JoinColumn({
    name: 'task_id'
})
 task: Task

}