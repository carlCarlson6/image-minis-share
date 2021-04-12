import { Identifier } from "../../../shared/common/core/valueObjects/Identifier";
import { Image } from "../../../shared/images/core/entities/Image";
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
        private approbation: Approbation,
        private title: string,
        private description: string,
        private images: Image[]
    ) {}

    public static Create(id: Identifier, title: string, description: string, imgaes: Image[]): Post {
        const approbation: Approbation = new Approbation(false);
        return new Post(id, approbation, title, description, imgaes);
    }
}
