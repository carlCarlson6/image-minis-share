import { ImageName } from "../../../../images/core/valueObjects/ImageName";

export class Image {
    constructor(
        readonly Name: ImageName,
        readonly Url: URL
    ) {}
}
