import { Handler } from "../../../shared/common/core/services/Handler";
import { UploadImageCommand } from "../../../shared/images/app/uploadImage/UploadImageCommand";
import { ImageBytes } from "../../../shared/images/core/valueObjects/ImageBytes";
import { ImageName } from "../../core/valueObjects/ImageName";
import { ImageUploader } from "./ImageUploader";

export class UploadImageCommandHandler implements Handler<UploadImageCommand, void> {
    constructor(
        private readonly useCase: ImageUploader
    ) {}
    
    public async Handle(message: UploadImageCommand): Promise<void> {
        const imageName: ImageName = new ImageName(message.Name, message.ImageExtension)
        const bytes: ImageBytes = new ImageBytes(message.Bytes);

        await this.useCase.Execute(imageName, bytes);
    }
}
