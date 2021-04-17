import { ImageBytes } from "../../../shared/images/core/valueObjects/ImageBytes";
import { ImageName } from "../valueObjects/ImageName";

export interface ImageStorage {
    Upload(imageName: ImageName, imageBytes: ImageBytes): Promise<void>;
    Read(imageName: ImageName): Promise<URL>;
    Delete(imageName: ImageName): Promise<void>;
}
