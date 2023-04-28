import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DataModule } from './data/data.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DataModule,
    ProductsModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
