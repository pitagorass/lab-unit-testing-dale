import { getModelToken } from "@nestjs/mongoose"
import { Test } from "@nestjs/testing"
import { FilterQuery } from "mongoose"
import { CharacterRepository } from "../character.repository"
import { Character } from "../schemas/character.schema"
import { characterStub } from "./stubs/charactr.stub"
import { CharacterModel } from "./support/character.model"

describe('UsersRepository', () => {
  let characterRepository: CharacterRepository;

  describe('find operations', () => {
    let characterModel: CharacterModel;
    let characterFilterQuery: FilterQuery<Character>;

    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
        providers: [
          CharacterRepository,
          {
            provide: getModelToken(Character.name),
            useClass: CharacterModel
          }
        ]
      }).compile();

      characterRepository = moduleRef.get<CharacterRepository>(CharacterRepository);
      characterModel = moduleRef.get<CharacterModel>(getModelToken(Character.name));

      characterFilterQuery = {
        _id: 32323
      }

      jest.clearAllMocks();
    })

    describe('findOne', () => {
      describe('when findOne is called', () => {
        let character: Character;

        beforeEach(async () => {
          jest.spyOn(characterModel, 'findOne');
          character = await characterRepository.findOne(characterFilterQuery);
        })

        test('then it should call the userModel', () => {
          expect(characterModel.findOne).toHaveBeenCalledWith(characterFilterQuery, { _id: 0, __v: 0 });
        })

        test('then it should return a user', () => {
          expect(character).toEqual(characterStub());
        })
      })
    })

    describe('find', () => {
      describe('when find is called', () => {
        let character: Character[];

        beforeEach(async () => {
          jest.spyOn(characterModel, 'find');
          character = await characterRepository.find(characterFilterQuery);
        })

        test('then it should call the userModel', () => {
          expect(characterModel.find).toHaveBeenCalledWith(characterFilterQuery);
        })

        test('then it should return a user', () => {
          expect(character).toEqual([characterStub()]);
        })
      })
    })

    describe('findOneAndUpdate', () => {
      describe('when findOneAndUpdate is called', () => {
        let character: Character;

        beforeEach(async () => {
          jest.spyOn(characterModel, 'findOneAndUpdate');
          character = await characterRepository.findOneAndUpdate(characterFilterQuery, characterStub());
        })

        test('then it should call the userModel', () => {
          expect(characterModel.findOneAndUpdate).toHaveBeenCalledWith(characterFilterQuery, characterStub(), { new: true });
        })

        test('then it should return a user', () => {
          expect(character).toEqual(characterStub());
        })
      })
    })
  })

  describe('create operations', () => {
    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
        providers: [
          CharacterRepository,
          {
            provide: getModelToken(Character.name),
            useValue: CharacterModel,
          },
        ],
      }).compile();

      characterRepository = moduleRef.get<CharacterRepository>(CharacterRepository);
    });

    describe('create', () => {
      describe('when create is called', () => {
        let character: Character;
        let saveSpy: jest.SpyInstance;
        let constructorSpy: jest.SpyInstance;

        beforeEach(async () => {
          saveSpy = jest.spyOn(CharacterModel.prototype, 'save');
          constructorSpy = jest.spyOn(CharacterModel.prototype, 'constructorSpy');
          character = await characterRepository.create(characterStub());
        })

        test('then it should call the userModel', () => {
          expect(saveSpy).toHaveBeenCalled();
          expect(constructorSpy).toHaveBeenCalledWith(characterStub())
        })

        test('then it should return a user', () => {
          expect(character).toEqual(characterStub());
        })
      })
    })
  })
})