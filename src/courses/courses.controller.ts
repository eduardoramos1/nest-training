import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CoursesService } from './service/courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService){}


    @Get('')
    findAll() {
     return this.coursesService.findAll()
    } 

    @Get(':id') 
    findOne(@Param('id') id: string ) {
        return  this.coursesService.findOne(id)
    }

    @Post("create")
    create(@Body() createCourseDto: CreateCourseDto) {
        return this.coursesService.create(createCourseDto)
    }
  
    @Patch(":id")
    update(@Param('id') id: string , @Body() updateCourseDto: UpdateCourseDto) {
        console.log(updateCourseDto)
        return this.coursesService.update(id, updateCourseDto)
    }

    @Delete(":id")
    remove(@Param('id') id: string) { 
        return this.coursesService.remove(id)
    }

}
