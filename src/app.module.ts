import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true // SÓ PARA DEVELOPMENT . Isso faz com que qualquer mudança nas entidades seja recriada automaticamente no bd
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
