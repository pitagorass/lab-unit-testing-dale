import { Injectable } from '@nestjs/common';
import { UpdateCharacterDto } from './dto/update-character.dto';

import { Character } from './schemas/character.schema';
import { CharacterRepository } from './character.repository';
import { CreateCharacterDto } from './dto/create-character.dto';

@Injectable()
export class CharacterService {
  constructor(private readonly characterRepository: CharacterRepository) {}

  async getCharacterById(characterId: number): Promise<Character> {
    return this.characterRepository.findOne({ characterId });
  }

  async getCharacters(): Promise<Character[]> {
    return this.characterRepository.find({});
  }

  async createCharacter(createCharacterDto: CreateCharacterDto): Promise<Character> {
    return this.characterRepository.create(createCharacterDto);
  }

  async updateCharacter(
    id: number,
    updateCharacterDto: UpdateCharacterDto,
  ): Promise<Character> {
    return this.characterRepository.findOneAndUpdate({ id }, updateCharacterDto);
  }
}
