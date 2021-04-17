import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";

// TODO
export class AzureBlobConnector {
    
    private readonly blobServiceClient: BlobServiceClient;
    private readonly blobContainer: ContainerClient;
    
    constructor(blobAccountName: string, sharedAccessSignature: string) {
        this.blobServiceClient = new BlobServiceClient(`https://${blobAccountName}.blob.core.windows.net${sharedAccessSignature}`);
    }

    public get Container(): ContainerClient {
        return this.blobContainer;
    }

}