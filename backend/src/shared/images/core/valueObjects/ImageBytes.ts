export class ImageBytes {
    constructor(
        readonly Value: string
    ) {}

    public get Length(): number {
        return this.Value.length;
    }
}
