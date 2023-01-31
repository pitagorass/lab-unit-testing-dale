import { characterStub } from "../test/stubs/charactr.stub";

export const CharacterService = jest.fn().mockReturnValue({
  getCharacterById: jest.fn().mockResolvedValue(characterStub()),
  getCharacters: jest.fn().mockResolvedValue([characterStub()]),
  createCharacter: jest.fn().mockResolvedValue(characterStub()),
  updateCharacter: jest.fn().mockResolvedValue(characterStub()),
})