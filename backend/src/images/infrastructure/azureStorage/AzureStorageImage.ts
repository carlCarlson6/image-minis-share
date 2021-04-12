import { ImageRepository } from "../../core/service/ImageRepository";

export class AureStorageImage implements ImageRepository {
    Upload(image: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    Delete(image: any): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
