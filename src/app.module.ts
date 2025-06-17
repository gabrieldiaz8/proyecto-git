import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { Controlador2Controller } from './controlador2/controlador2.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, Controlador2Controller],
  providers: [AppService],
})
export class AppModule {}
