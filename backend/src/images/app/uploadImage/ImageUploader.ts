import { ImageBytes } from "../../../shared/images/core/valueObjects/ImageBytes";
import { ImageStorage } from "../../core/services/ImageStorage";
import { ImageName } from "../../core/valueObjects/ImageName";

export class ImageUploader {
    constructor(
        private readonly imageStorage: ImageStorage
    ) {}

    public async Execute(name: ImageName, bytes: ImageBytes): Promise<void> {
        await this.imageStorage.Upload(name, bytes);
    }
}
