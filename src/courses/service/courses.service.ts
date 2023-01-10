import { UpdateCourseDto } from './../dto/update-course.dto';
import { CreateCourseDto } from './../dto/create-course.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../entities/course.entity';
import { Tag } from '../entities/tag.entity';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course) private readonly courseRepository: Repository<Course>,
        @InjectRepository(Tag) private readonly tagRepository:  Repository<Tag>
    ){}

    findAll() {
        return this.courseRepository.find({
            relations: ['tags']
        })
    }

    findOne(id: string) {
        const course = this.courseRepository.find({
            where: {
                id
            },
            relations: ['tags']
        })  
        
        if(!course) throw new NotFoundException(`ID ${id} não encontrado`)

        return course
    }

    async create(createCourseDto: CreateCourseDto) {
        const tags = await Promise.all(createCourseDto.tags
            .map(tagName => this.preloadTagByName(tagName)))

        const course = this.courseRepository.create({
            ...createCourseDto,
            tags
        })

        return this.courseRepository.save(course)
         
    }

    async update(id: string, updateCourseDto: UpdateCourseDto) {
        const tags = updateCourseDto.tags && (
            await Promise.all(updateCourseDto.tags.map((tagName) => this.preloadTagByName(tagName)))
        )

        // Encontra no bd o id que quero alterar e retorna um objeto no padrao aceito pelo typoorm
        const course = await this.courseRepository.preload({
            id,
            ...updateCourseDto,
            tags
        })

        if(!course) throw new NotFoundException(`Este registro não foi encontrado no banco de dados`)

        return this.courseRepository.save(course)
    }

    async remove(id: string) {
       const course = await this.courseRepository.findOneBy({id})
       
       if (!course) throw new NotFoundException(`ID ${id} não encontrado`)

       return this.courseRepository.remove(course)
    }


    private async preloadTagByName(name: string ): Promise<Tag> {
        const tag = await this.tagRepository.findOneBy({name})

        if(tag){
            return tag
        }

        return this.tagRepository.create({name})
    }
}
