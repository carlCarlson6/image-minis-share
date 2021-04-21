import { BlobDeleteResponse, BlobServiceClient, BlockBlobClient, BlockBlobUploadResponse, ContainerClient } from "@azure/storage-blob";
import { nameOf } from "../../shared/common/utils/NameOf";
import { ImageBytes } from "../../shared/images/core/valueObjects/ImageBytes";
import { ImageStorageError } from "../core/errors/ImageStorageError";
import { ImageStorage } from "../core/services/ImageStorage";
import { ImageName } from "../core/valueObjects/ImageName";

export class AzureBlobImageStorage implements ImageStorage {
    private readonly imageContainer: ContainerClient;

    constructor(sharedAccessSignature: string, accountName: string, containerName: string) {
        const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net${sharedAccessSignature}`);
        this.imageContainer = blobServiceClient.getContainerClient(containerName);
    }

    public async Upload(imageName: ImageName, imageBytes: ImageBytes): Promise<void> {
        const imageBlob: BlockBlobClient = this.imageContainer.getBlockBlobClient(imageName.Value);
        const response: BlockBlobUploadResponse = await imageBlob.upload(imageBytes.Value, imageBytes.Length);

        if(response.errorCode) {
            throw new ImageStorageError(nameOf(response), response.errorCode);
        } 
    }

    public async Read(imageName: ImageName): Promise<URL> {
        const imageBlob: BlockBlobClient = this.imageContainer.getBlockBlobClient(imageName.Value);
        
        try {
            const imageUrl = new URL(imageBlob.url);
            return imageUrl;
        } 
        catch (error) {
            throw new ImageStorageError(nameOf(error), '404');
        }
    }

    public async Delete(imageName: ImageName): Promise<void> {
        const imageBlob: BlockBlobClient = this.imageContainer.getBlockBlobClient(imageName.Value);
        const response: BlobDeleteResponse = await imageBlob.delete();

        if(response.errorCode) {
            throw new ImageStorageError(nameOf(response), response.errorCode);
        } 
    }
}
