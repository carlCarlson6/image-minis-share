import { Identifier } from "../../../shared/common/core/valueObjects/Identifier";
import { Post } from "../../core/entities/Post";
import { PostsRepository } from "../../core/services/PostsRepository";

export class MongoPostsRepository implements PostsRepository {
    Save(post: Post): Promise<void> {
        throw new Error("Method not implemented.");
    }
    RetrieveAll(): Promise<Post[]> {
        throw new Error("Method not implemented.");
    }
    Retrieve(id: Identifier): Promise<Post> {
        throw new Error("Method not implemented.");
    }
    Update(post: Partial<Post>): Promise<void> {
        throw new Error("Method not implemented.");
    }
    Delete(id: Identifier): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
