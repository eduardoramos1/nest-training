import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string
    
    // vai salvar o array no bd como json e pode ser nulo
    @Column('json', {
        nullable: true
    })
    tags: string[]
}