import { Test, TestingModule } from '@nestjs/testing';
import { ServicioUsersService } from './servicio-users.service';

describe('ServicioUsersService', () => {
  let service: ServicioUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicioUsersService],
    }).compile();

    service = module.get<ServicioUsersService>(ServicioUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
