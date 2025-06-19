import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { Controlador2Controller } from './controlador2/controlador2.controller';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [UsersModule, RolesModule],
  controllers: [AppController, UsersController, Controlador2Controller],
  providers: [AppService],
})
export class AppModule {}
