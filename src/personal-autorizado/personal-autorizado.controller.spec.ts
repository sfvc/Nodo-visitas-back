import { Test, TestingModule } from '@nestjs/testing';
import { PersonalAutorizadoController } from './personal-autorizado.controller';
import { PersonalAutorizadoService } from './personal-autorizado.service';

describe('PersonalAutorizadoController', () => {
  let controller: PersonalAutorizadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalAutorizadoController],
      providers: [PersonalAutorizadoService],
    }).compile();

    controller = module.get<PersonalAutorizadoController>(PersonalAutorizadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
