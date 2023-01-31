import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './schemas/character.schema';
import { CharacterController } from './character.controller';
import { CharacterRepository } from './character.repository';
import { CharacterService } from './character.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Character.name, schema: CharacterSchema },
    ]),
  ],
  controllers: [CharacterController],
  providers: [CharacterService, CharacterRepository],
})
export class CharacterModule {}
