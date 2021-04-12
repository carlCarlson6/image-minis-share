import { Identifier } from "../../../shared/core/valueObjects/Identifier";
import { Approbation } from "../valueObjects/Approbation";

export class Post {

    public get Id(): Identifier {
        return this.id;
    }
    public get Approbation(): Approbation {
        return this.approbation;
    }

    constructor(
        private id: Identifier,
        private approbation: Approbation
    ) {}

    public static Create(id: string): Post {
        const identifier: Identifier = new Identifier(id);
        const approbation: Approbation = new Approbation(false);
        return new Post(identifier, approbation);
    }
}