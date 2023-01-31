import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { EntityRepository } from '../database/entity.repository';

import { CharacterDocument, Character } from './schemas/character.schema';

@Injectable()
export class CharacterRepository extends EntityRepository<CharacterDocument> {
  constructor(
    @InjectModel(Character.name) characterModel: Model<CharacterDocument>,
  ) {
    super(characterModel);
  }
}
