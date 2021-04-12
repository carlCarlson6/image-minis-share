export class NewPostCommand {
    constructor(
        readonly Id: string,
        readonly Title: string,
        readonly Description: string,
        readonly ImagesBytes: string[]
    ) {}
}
