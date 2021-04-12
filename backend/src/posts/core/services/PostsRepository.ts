import { Identifier } from "../../../shared/common/core/valueObjects/Identifier";
import { Post } from "../entities/Post";

export interface PostsRepository {
    Save(post: Post): Promise<void>;
    RetrieveAll(): Promise<Post[]>;
    Retrieve(id: Identifier): Promise<Post>;
    Update(post: Partial<Post>): Promise<void>;
    Delete(id: Identifier): Promise<void>;
}
