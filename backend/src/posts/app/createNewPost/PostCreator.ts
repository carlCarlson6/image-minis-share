import { ServiceBus } from "../../../shared/common/core/services/ServiceBus";
import { Identifier } from "../../../shared/common/core/valueObjects/Identifier";
import { RetrieveImageQuery } from "../../../shared/images/app/retrieveImage/RetrieveImageQuery";
import { UploadedImage } from "../../../shared/images/app/retrieveImage/UploadedImage";
import { UploadImageCommand } from "../../../shared/images/app/uploadImage/UploadImageCommand";
import { Image } from "../../../shared/images/core/entities/Image";
import { ImageBytes } from "../../../shared/images/core/valueObjects/ImageBytes";
import { Post } from "../../core/entities/Post";
import { PostsRepository } from "../../core/services/PostsRepository";
import { parse, Url } from "url";

export class PostCreator {
    constructor(
        private readonly ServiceBus: ServiceBus,
        private readonly Repository: PostsRepository
    ) {}

    public async Execute(id: Identifier, title: string, description: string, imagesBytes: ImageBytes[], imageExtension: string): Promise<void> {
        const images: Image[] = await Promise.all(
            imagesBytes.map(async (imageBytes): Promise<Image> => this.UploadImage(imageBytes, imageExtension))
        );
        
        const post: Post = Post.Create(id, title, description, images);
        
        await this.Repository.Save(post);
    }

    private async UploadImage(imageBytes: ImageBytes, imageExtension: string): Promise<Image> {
        const imageId: Identifier = Identifier.Create();

        const commnad: UploadImageCommand = new UploadImageCommand(imageId.Value, imageBytes.Value, imageExtension);
        await this.ServiceBus.Dispatch<UploadImageCommand, void>(commnad);
        
        const query: RetrieveImageQuery = new RetrieveImageQuery(imageId.Value);
        const uploadedImage = await this.ServiceBus.Dispatch<RetrieveImageQuery, UploadedImage>(query)
        const url: Url = parse(uploadedImage.url, false)

        throw new Error();
        //return new Image(imageId, url);
    }
}
