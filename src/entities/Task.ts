import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Task_entry } from "./Task_entry";

@Entity('task') //declare the table
export class Task extends BaseEntity {
 
@PrimaryGeneratedColumn()
id: number;
    
 @Column(
{unique: true}
 )
 name: string;

 @Column()
 comments: string;

 @OneToMany(
    () => Task_entry,
    task_entry => task_entry.task
)
// dont need a foreign key here because that is on the many side, but we could have an array column
task_entry: Task_entry[]

}