export interface ImageRepository {
    Upload(image: any): Promise<void>;
    Delete(image: any): Promise<void>;
}
