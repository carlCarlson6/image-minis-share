import { v4 as uuidv4, validate as validateUuidv4 } from "uuid";
import { InvalidIndentifier } from "../errors/InvalidIndentifier";

export class Identifier {    
    public readonly Value: string;

    constructor(id: string) {
        this.ValidateIndentifier(id);
        this.Value = id;
    }

    public static Create(): Identifier {
        const id: string = uuidv4();
        return new Identifier(id);
    }

    private ValidateIndentifier(id: string) {
        if(!validateUuidv4(id)) {
            throw new InvalidIndentifier();
        }
    }
}
