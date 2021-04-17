export class ImageStorageError extends Error {
    constructor(responseType: string, errorCode: string) {
        const message: string = `there was an error when ${responseType} with error ${errorCode}`;
        super(message);
    }
} 