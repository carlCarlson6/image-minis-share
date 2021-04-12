import { ServiceBus } from "../../../shared/common/core/services/ServiceBus";
import { Identifier } from "../../../shared/common/core/valueObjects/Identifier";
import { UploadedImage } from "../../../shared/images/app/uploadImage/UploadedImage";
import { UploadImageCommand } from "../../../shared/images/app/uploadImage/UploadImageCommand";
import { Image } from "../../../shared/images/core/entities/Image";
import { ImageBytes } from "../../../shared/images/core/valueObjects/ImageBytes";
import { Post } from "../../core/entities/Post";
import { PostsRepository } from "../../core/services/PostsRepository";

export class PostCreator {
    constructor(
        private readonly ServiceBus: ServiceBus,
        private readonly Repository: PostsRepository
    ) {}

    public async Execute(id: Identifier, title: string, description: string, imagesBytes: ImageBytes[]): Promise<void> {
        const images: Image[] = await Promise.all(imagesBytes.map(async (imageBytes): Promise<Image> => this.SendImageToUpload(imageBytes)));
        
        const post: Post = Post.Create(id, title, description, images);
        
        this.Repository.Save(post);
    }

    private async SendImageToUpload(imageBytes: ImageBytes): Promise<Image> {
        const imageName: string = Identifier.Create().Value;

        const commnad: UploadImageCommand = new UploadImageCommand(imageName, imageBytes.Value);
        const uploadedImage = await this.ServiceBus.Dispatch<UploadImageCommand, UploadedImage>(commnad);
        
        return uploadedImage.Image;
    }

}
