export class Approbation {

    public get Value(): boolean {
        return this.value;
    }

    constructor(
        private value: boolean
    ) {}

    public Approbe(): void {
        this.value = true;
    }
    public Disapprobe(): void {
        this.value = false;
    }
}
