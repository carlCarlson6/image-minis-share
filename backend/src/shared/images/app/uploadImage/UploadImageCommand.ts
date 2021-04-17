import { ImageBytes } from "../../core/valueObjects/ImageBytes";

export class UploadImageCommand {
    constructor(
        readonly Name: string,
        readonly ImageExtension: string,
        readonly Bytes: string
    ) {}
}
