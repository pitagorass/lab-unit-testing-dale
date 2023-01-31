import { MockModel } from "../../../database/test/support/mock.model";
import { Character } from "../../schemas/character.schema";
import { characterStub } from "../stubs/charactr.stub";

export class CharacterModel extends MockModel<Character> {
  protected entityStub = characterStub()
}