import { Injectable } from '@nestjs/common';

@Injectable() //inyecciones
export class AppService {
  getHello(): string {
    return 'World!';
  }
}
