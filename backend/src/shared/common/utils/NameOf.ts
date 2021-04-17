export const nameOf = (object: Object): string => {
    const nameOfObject: string = object.constructor.name;
    return nameOfObject;
}
