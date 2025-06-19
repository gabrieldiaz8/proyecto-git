// Importaciones que vamos a usar
import { Injectable } from '@nestjs/common';

@Injectable() //inyecciones
export class AppService {
  getHello(): string {
    return 'Realizando cambios para hacer un conflicto';
  }
}
