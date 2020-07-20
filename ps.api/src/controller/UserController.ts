import { Request } from 'express';
import { User } from "../entity/User";
import { BaseController } from "./BaseController";
import { sign } from 'jsonwebtoken';
import config from "../include/config";
import * as md5 from 'md5';

export class UserController extends BaseController<User> {

    constructor() {
        super(User);
    }

    async auth(request: Request) {
        let { email, password } = request.body;
        if (!email || !password) {
            return { 
                status: 400, 
                message: 'Para entrar no sistema informe e-mail e senha!'
            };
        }

        let user = await this.repository.findOne({ email: email, password: md5(password) });
        if (user) {
            let _payload = {
                uid: user.uid,
                name: user.name,
                nick: user.nick,
                email: user.email
            }
            return {
                status: 200,
                message: {
                    user: _payload,
                    token: sign({
                        _payload, 
                        tm: new Date().getTime()
                    }, config.secretKey)
                }
            }
        } 
        else {
            return { 
                status: 404, 
                message: 'Ocorreram erros para efetuar o login!' 
            }
        }
    }
    
    async save(request: Request) {
        // Conceito de desestruturação
        let { name, nick, email, password } = <User>request.body;
        // Validação dos campos obrigatórios
        super.isRequired(name, 'Informe seu nome!');
        super.isRequired(nick, 'Informe seu apelido!');
        super.isRequired(email, 'Informe seu e-mail!');
        super.isRequired(password, 'Informe sua senha!');
        
        let _user = new User();
        _user.name = name;
        _user.nick = nick;
        _user.email = email;
        if (password)
            _user.password = md5(password);
            
        return super.save(_user);
    } 

}

