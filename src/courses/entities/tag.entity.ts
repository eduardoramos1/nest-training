import { Course } from './course.entity';
import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

import { v4 as uuidv4 } from 'uuid'

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @ManyToMany((course) => Course, (course: Course) => course.tags )
    courses: Course[]

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date


    @BeforeInsert()
    generatedId(){
        if( this.id ) return
        
        this.id = uuidv4()
    }

}
