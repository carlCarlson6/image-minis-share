import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";

// TODO
export class AzureBlobContainerFactory {
    
    private readonly blobServiceClient: BlobServiceClient;
    
    constructor(sharedAccessSignature: string, accountName: string) {
        this.blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net${sharedAccessSignature}`);
    }

    public GetContainer(containerName: string): ContainerClient {
        const containerClient = this.blobServiceClient.getContainerClient(containerName);
        return containerClient;
    }
}