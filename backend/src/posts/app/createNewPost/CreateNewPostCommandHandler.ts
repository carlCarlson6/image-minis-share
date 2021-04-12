import { Handler } from "../../../shared/common/core/services/Handler";
import { Identifier } from "../../../shared/common/core/valueObjects/Identifier";
import { ImageBytes } from "../../../shared/images/core/valueObjects/ImageBytes";
import { NewPostCommand } from "./NewPostCommand";
import { PostCreator } from "./PostCreator";

export class CreateNewPostCommandHandler implements Handler<NewPostCommand, void> {
    constructor(
        private readonly UseCase: PostCreator
    ) {}
    
    public async Handle(message: NewPostCommand): Promise<void> {
        const id = new Identifier(message.Id);
        const imagesBytes: ImageBytes[] = message.ImagesBytes.map(bytes => new ImageBytes(bytes));

        await this.UseCase.Execute(id, message.Title, message.Description, imagesBytes);
    }

}
