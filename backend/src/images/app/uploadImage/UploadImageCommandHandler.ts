import { Handler } from "../../../shared/common/core/services/Handler";
import { UploadedImage } from "../../../shared/images/app/uploadImage/UploadedImage";
import { UploadImageCommand } from "../../../shared/images/app/uploadImage/UploadImageCommand";

export class UploadImageCommandHandler implements Handler<UploadImageCommand, UploadedImage> {
    public async Handle(message: UploadImageCommand): Promise<UploadedImage> {
        throw new Error("Method not implemented.");
    }
}
