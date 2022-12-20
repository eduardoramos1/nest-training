import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from '../entities/course.entity';

@Injectable()
export class CoursesService {
    private courses : Course[] = [
        {
            id: 1,
            name: 'Computação',
            description: 'É isso ai',
            tags: ['xablau.js', 'desgraca.js', "nest.js"]
        }
    ]

    findAll() {
        return this.courses
    }

    findOne(id: string) {
        const course = this.courses.find((course) => course.id === Number(id))
        
        if(!course) throw new HttpException(`ID ${id} não encontrado`, HttpStatus.NOT_FOUND)

        return course
    }

    create(createCourseDto: any) {
        this.courses.push(createCourseDto)
    }

    update(id: string, updateCourseDto: any) {
        this.courses = this.courses.map(course => {
            if(course.id === Number(id)) return updateCourseDto
            return course
        })
    }

    remove(id: string) {
        this.courses = this.courses.filter(course => course.id !== Number(id))
    }
}
