import { Image } from "../../../shared/images/core/entities/Image";

export interface ImageRepository {
    Upload(image: any): Promise<void>;
    Read(image: any): Promise<Image>;
    Delete(image: any): Promise<void>;
}
