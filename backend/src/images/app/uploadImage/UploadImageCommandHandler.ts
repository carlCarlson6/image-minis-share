import { Handler } from "../../../shared/common/core/services/Handler";
import { UploadImageCommand } from "../../../shared/images/app/uploadImage/UploadImageCommand";

export class UploadImageCommandHandler implements Handler<UploadImageCommand, void> {
    public async Handle(message: UploadImageCommand): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
