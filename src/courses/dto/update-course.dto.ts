
import {PartialType} from "@nestjs/mapped-types"
import { CreateCourseDto } from "./create-course.dto";


// PartialType está fazendo o seguinte: 
// Permite que somente algumas das informações baseadas no CreateCourseDTO e passe na validação mesmo que não tenho todos tipos definidos em create-course.dto
export class UpdateCourseDto extends PartialType(CreateCourseDto ) {}