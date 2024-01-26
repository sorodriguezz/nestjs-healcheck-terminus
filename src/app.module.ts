import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AppController } from './app.controller';
import { HealthController } from './health/health.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthDbController } from './health-db/health-db.controller';
import { HealthMemoryController } from './health-memory/health-memory.controller';

@Module({
  imports: [
    TerminusModule,
    HttpModule,
    TypeOrmModule.forRoot({
      name: 'pg-db',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'alumno',
      password: '123456',
      database: 'course-db',
      autoLoadEntities: true,
    }),
    TypeOrmModule.forRoot({
      name: 'mysql-db',
      type: 'mysql',
      host: '192.168.100.49',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'testdb',
    }),
  ],
  controllers: [
    AppController,
    HealthController,
    HealthDbController,
    HealthMemoryController,
  ],
  providers: [],
})
export class AppModule {}
