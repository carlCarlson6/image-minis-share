export class HandlerNotFound extends Error {
    constructor(handlerName: string) {
        const message: string = "".concat("handler ", handlerName, " does not exist");
        super(message);
    }
}