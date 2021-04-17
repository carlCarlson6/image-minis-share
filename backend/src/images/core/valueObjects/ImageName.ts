import { Identifier } from "../../../shared/common/core/valueObjects/Identifier";

export class ImageName {

    private readonly id: Identifier;

    public get Value(): string {
        return `${this.id.Value}.${this.imageExtension}`;
    }

    constructor(
        identifier: string,
        private readonly imageExtension: string
    ) {
        this.id = new Identifier(identifier);
    }
}