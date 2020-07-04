import { Request } from 'express';
import { BaseController } from "./BaseController";
import { User } from "../entity/User"

export class UserController extends BaseController<User>{

    constructor() {
        super(User);
    }

    async save(request: Request) {
        let _user = <User>request.body;
        super.isRequired(_user.name, 'Informe seu nome!');
        super.isRequired(_user.nick, 'Informe seu apelido!');
        super.isRequired(_user.email, 'Informe seu e-mail!');
        super.isRequired(_user.password, 'Informe sua senha!');
        return super.save(_user);
    } 
}