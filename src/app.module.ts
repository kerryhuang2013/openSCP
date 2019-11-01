import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
