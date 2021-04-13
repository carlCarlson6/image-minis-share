import { Url } from "url";
import { Identifier } from "../../../common/core/valueObjects/Identifier";

export class Image {
    constructor(
        readonly Id: Identifier,
        readonly Url: Url
    ) {}
}
