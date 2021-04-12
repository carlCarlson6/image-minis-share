import { Request, Response, Router } from "express";

export class PostsRoutes {
    public router = Router();
    public path: string = '/api/paints';

    private Put = (request: Request, response: Response) => { throw new Error('not implemented'); }
    private Get = (request: Request, response: Response) => { throw new Error('not implemented'); }
    private Patch = (request: Request, response: Response) => { throw new Error('not implemented'); }

    constructor() {
        this.DeclareRoutes();
    }

    private DeclareRoutes(): void {
        this.router.put('/:PostIdentifier', this.Put);
        this.router.get('', this.Get);
        this.router.patch('/:PostIdentifier', this.Patch);
    }
}
