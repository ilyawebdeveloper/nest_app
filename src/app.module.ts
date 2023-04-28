import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DataModule } from './data/data.module';

@Module({
  imports: [
    DataModule,
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://ilya:ilya261723@nest.1llxjxh.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
