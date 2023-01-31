import { Test } from '@nestjs/testing';
import { CharacterService } from './character.service';
import { CharacterRepository } from './character.repository';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

describe('CharacterService', () => {
  let characterService: CharacterService;
  let characterRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CharacterService,
        {
          provide: CharacterRepository,
          useValue: {
            findOne: jest.fn(),
            find: jest.fn(),
            create: jest.fn(),
            findOneAndUpdate: jest.fn(),
          },
        },
      ],
    }).compile();

    characterService = module.get<CharacterService>(CharacterService);
    characterRepository = module.get<CharacterRepository>(CharacterRepository);
  });

  describe('getCharacterById', () => {
    it('should return a character by its id', async () => {
      const character = { characterId: 1, name: 'John Doe' };
      characterRepository.findOne.mockResolvedValue(character);

      const result = await characterService.getCharacterById(1);

      expect(characterRepository.findOne).toHaveBeenCalledWith({
        characterId: 1,
      });
      expect(result).toEqual(character);
    });
  });

  describe('getCharacters', () => {
    it('should return all characters', async () => {
      const characters = [
        { characterId: 1, name: 'John Doe' },
        { characterId: 2, name: 'Jane Doe' },
      ];
      characterRepository.find.mockResolvedValue(characters);

      const result = await characterService.getCharacters();

      expect(characterRepository.find).toHaveBeenCalled();
      expect(result).toEqual(characters);
    });
  });
  describe('createCharacter', () => {
    it('should call characterRepository.create() with the provided character', async () => {
      const createCharacterDto: CreateCharacterDto = {
        id: 1,
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
      await characterService.createCharacter(createCharacterDto);
      expect(characterRepository.create).toHaveBeenCalledWith(
        createCharacterDto,
      );
    });
    describe('updateCharacter', () => {
        it('should call characterRepository.findOneAndUpdate() with the provided id and updateCharacterDto', async () => {
        const id = 1;
        const updateCharacterDto: UpdateCharacterDto = {
            id: 1,
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
        await characterService.updateCharacter(id, updateCharacterDto);
        expect(characterRepository.findOneAndUpdate).toHaveBeenCalledWith({ id }, updateCharacterDto);
        });
        });
  });
});
