import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/product/product.module';
import { MongooseModule } from '@nestjs/mongoose';


const DB_URL = 'mongodb://localhost:27017/e-cormerce';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(DB_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}