import { Test } from '@nestjs/testing';
import { CharacterController } from '../character.controller';
import { CharacterService } from '../character.service';
import { CreateCharacterDto } from '../dto/create-character.dto';
import { UpdateCharacterDto } from '../dto/update-character.dto';
import { Character } from '../schemas/character.schema';
import { characterStub } from './stubs/charactr.stub';

jest.mock('../character.service');

describe('UsersController', () => {
  let characterController: CharacterController;
  let characterService: CharacterService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [CharacterController],
      providers: [CharacterService],
    }).compile();

    characterController =
      moduleRef.get<CharacterController>(CharacterController);
    characterService = moduleRef.get<CharacterService>(CharacterService);
    jest.clearAllMocks();
  });

  describe('getUser', () => {
    describe('when getUser is called', () => {
      let character: Character;

      beforeEach(async () => {
        character = await characterController.getCharacter(characterStub().id);
      });

      test('then it should call usersService', () => {
        expect(characterService.getCharacterById).toBeCalledWith(
          characterStub().id,
        );
      });

      test('then is should return a user', () => {
        expect(character).toEqual(characterStub());
      });
    });
  });

  describe('getUsers', () => {
    describe('when getUsers is called', () => {
      let character: Character[];

      beforeEach(async () => {
        character = await characterController.getCharacters();
      });

      test('then it should call usersService', () => {
        expect(characterService.getCharacters).toHaveBeenCalled();
      });

      test('then it should return users', () => {
        expect(character).toEqual([characterStub()]);
      });
    });
  });

  describe('createUser', () => {
    describe('when createUser is called', () => {
      let character: Character;
      let createCharacterDto: CreateCharacterDto;

      beforeEach(async () => {
        createCharacterDto = {
          id: 23132,
          name: 'R2-D2',
          height: '96',
          mass: '32',
          hair_color: 'n/a',
          skin_color: 'white, blue',
          eye_color: 'red',
          birth_year: '33BBY',
          gender: 'n/a',
          homeworld: 'https://swapi.dev/api/planets/8/',
          films: [
            'https://swapi.dev/api/films/1/',
            'https://swapi.dev/api/films/2/',
            'https://swapi.dev/api/films/3/',
            'https://swapi.dev/api/films/4/',
            'https://swapi.dev/api/films/5/',
            'https://swapi.dev/api/films/6/',
          ],
          species: ['https://swapi.dev/api/species/2/'],
          vehicles: [],
          starships: [],
        };
        character = await characterController.createCharacter(
          createCharacterDto,
        );
      });

      test('then it should call usersService', () => {
        expect(characterService.createCharacter).toHaveBeenCalledWith(
          createCharacterDto,
        );
      });

      test('then it should return a user', () => {
        expect(character).toEqual(characterStub());
      });
    });
  });

  describe('updateUser', () => {
    describe('when updateUser is called', () => {
      let character: Character;
      let updateCharacterDto: UpdateCharacterDto;

      beforeEach(async () => {
        updateCharacterDto = {
          id: 23132,
          name: 'R2-D2',
          height: '96',
          mass: '32',
          hair_color: 'n/a',
          skin_color: 'white, blue',
          eye_color: 'red',
          birth_year: '33BBY',
          gender: 'n/a',
          homeworld: 'https://swapi.dev/api/planets/8/',
          films: [
            'https://swapi.dev/api/films/1/',
            'https://swapi.dev/api/films/2/',
            'https://swapi.dev/api/films/3/',
            'https://swapi.dev/api/films/4/',
            'https://swapi.dev/api/films/5/',
            'https://swapi.dev/api/films/6/',
          ],
          species: ['https://swapi.dev/api/species/2/'],
          vehicles: [],
          starships: [],
        };
        character = await characterController.updateCharacter(
          characterStub().id,
          updateCharacterDto,
        );
      });

      test('then it should call usersService', () => {
        expect(characterService.updateCharacter).toHaveBeenCalledWith(
          characterStub().id,
          updateCharacterDto,
        );
      });

      test('then it should return a user', () => {
        expect(character).toEqual(characterStub());
      });
    });
  });
});
