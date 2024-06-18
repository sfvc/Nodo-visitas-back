import { Test, TestingModule } from '@nestjs/testing';
import { PersonalAutorizadoService } from './personal-autorizado.service';

describe('PersonalAutorizadoService', () => {
  let service: PersonalAutorizadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalAutorizadoService],
    }).compile();

    service = module.get<PersonalAutorizadoService>(PersonalAutorizadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
