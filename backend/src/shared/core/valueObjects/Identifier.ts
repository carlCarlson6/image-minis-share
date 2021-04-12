import { v4 as uuidv4, validate as validateUuidv4 } from "uuid";
import { InvalidIndentifier } from "../errors/InvalidIdentifier";
import { StringValueObject } from "./common/StringValueObject";

export class Identifier extends StringValueObject {
        
    constructor(id: string) {
        super();
        this.ValidateIndentifier(id);
        this.value = id;
    }

    public static Create(): Identifier {
        const id: string = uuidv4();
        return new Identifier(id);
    }

    public ValidateIndentifier(id: string) {
        if(!validateUuidv4(id)) {
            throw new InvalidIndentifier();
        }
    }
}
