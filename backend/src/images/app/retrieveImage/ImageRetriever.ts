import { Image } from "../../../shared/images/core/entities/Image";
import { ImageStorage } from "../../core/services/ImageStorage";
import { ImageName } from "../../core/valueObjects/ImageName";

export class ImageRetriever {
    constructor(
        private readonly imageStorage: ImageStorage
    ) {}

    public async Execute(name: ImageName): Promise<Image> {
        const imageUrl: URL = await this.imageStorage.Read(name);
        
        const image: Image = new Image(name, imageUrl);
        return image;
    }
}