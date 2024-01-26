import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  MemoryHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

/*
  Ejemplo multiple datasource
  */
@Controller('health-db')
export class HealthDbController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    @InjectDataSource('mysql-db')
    private mysql: DataSource,
    @InjectDataSource('pg-db')
    private pg: DataSource,
    private memory: MemoryHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.db.pingCheck('pg-local', { connection: this.pg }),
      () => this.db.pingCheck('mysql-pi', { connection: this.mysql }),
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
    ]);
  }
}
