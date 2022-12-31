import { UpdateCourseDto } from './../dto/update-course.dto';
import { CreateCourseDto } from './../dto/create-course.dto';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../entities/course.entity';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course) private readonly courseRepository: Repository<Course>){}

    findAll() {
        return this.courseRepository.find()
    }

    findOne(id: string) {
        const course = this.courseRepository.findOneBy({id: +id})
        
        if(!course) throw new NotFoundException(`ID ${id} não encontrado`)

        return course
    }

    create(createCourseDto: CreateCourseDto) {
        const course = this.courseRepository.create(createCourseDto)

        return this.courseRepository.save(course)
         
    }

    async update(id: string, updateCourseDto: UpdateCourseDto) {
        // Encontra no bd o id que quero alterar e retorna um objeto no padrao aceito pelo typoorm
        const course = await this.courseRepository.preload({
            id: +id,
            ...updateCourseDto
        })

        if(!course) throw new NotFoundException(`Este registro não foi encontrado no banco de dados`)

        return this.courseRepository.save(course)
    }

    async remove(id: string) {
       const course = await this.courseRepository.findOneBy({id: +id})
       
       if (!course) throw new NotFoundException(`ID ${id} não encontrado`)

       return this.courseRepository.remove(course)
    }
}
