import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Task_entry } from "./Task_entry";

@Entity('project') //declare the table
export class Project extends BaseEntity {
 
@PrimaryGeneratedColumn()
id: number;
   
 @Column(
{unique: true}
 )
 name: string;

 @Column()
 description: string;

 @OneToMany(
     () => Task_entry,
     task_entry => task_entry.project
 )
 // dont need a foreign key here because that is on the one/parent side, but we could have an array column
 task_entry: Task_entry[]

}