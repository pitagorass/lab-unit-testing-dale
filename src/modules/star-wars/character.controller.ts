import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

import { Character } from './schemas/character.schema';
import { CharacterService } from './character.service';

@Controller('starWars')
export class CharacterController {
  private readonly logger = new Logger(CharacterController.name);
  constructor(private readonly characterService: CharacterService) {}

  @Get('characters')
  async getCharacters(): Promise<Character[]> {
    this.logger.log(
      'Controlador para obtener todos los personajes de Star Wars en mongodb',
    );
    return this.characterService.getCharacters();
  }

  @Get('character/:characterId')
  async getCharacter(
    @Param('characterId') charcaterId: number,
  ): Promise<Character> {
    this.logger.log(
      'Controlador para obtener un personaje de Star Wars en mongodb con el Id',
    );
    return this.characterService.getCharacterById(charcaterId);
  }

  @Post()
  async createCharacter(
    @Body() createCharacterDto: CreateCharacterDto,
  ): Promise<Character> {
    this.logger.log(
      'Controlador para crear personajes de Star Wars en mongodb',
    );
    return this.characterService.createCharacter(createCharacterDto);
  }

  @Patch('character/:characterId')
  async updateCharacter(
    @Param('characterId') charcaterId: number,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ): Promise<Character> {
    this.logger.log(
      'Controlador para actualizar un personaje de Star Wars en mongodb con el Id',
    );
    return this.characterService.updateCharacter(charcaterId, updateCharacterDto);
  }
}
