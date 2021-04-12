import { BooleanValueObject } from "../../../shared/core/valueObjects/common/BooleanValueObject";

export class Approbation extends BooleanValueObject {

    public get Value(): boolean {
        return this.value;
    }

    constructor(approbation: boolean) {
        super(approbation);
    }

    public Approbe(): void {
        this.value = true;
    }
    public Disapprobe(): void {
        this.value = false;
    }
}
