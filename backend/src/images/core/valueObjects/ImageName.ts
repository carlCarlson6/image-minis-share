import { Identifier } from "../../../shared/common/core/valueObjects/Identifier";

export class ImageName {

    private readonly id: Identifier;

    public get Value(): string {
        return `${this.id.Value}.${this.imageExtension}`;
    }

    constructor(
        readonly imageExtension: string
    ) {
        this.id = Identifier.Create();
    }
}