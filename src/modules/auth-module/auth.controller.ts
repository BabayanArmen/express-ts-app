import { Request, Response } from 'express';

export class AuthController {

    static Login(req: Request, res: Response) {
        res.send('login is success')
    }

    static TestQuery(req: Request, res: Response) {
        res.send('auth query is success')
    }

    static TestParams(req: Request, res: Response) {
        res.send('auth params is success')
    }
}