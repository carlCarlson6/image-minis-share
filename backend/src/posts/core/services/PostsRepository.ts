import { Identifier } from "../../../shared/core/valueObjects/Identifier";
import { Post } from "../entities/Post";

export interface PostsRepository {
    Save(post: Post): Promise<void>;
    Retrieve(): Promise<Post[]>;
    Retrieve(id: Identifier): Promise<Post>;
    Update(post: Partial<Post>): Promise<void>;
    Delete(id: Identifier): Promise<void>;
}
