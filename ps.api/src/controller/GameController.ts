import { Request } from 'express';
import Game from "../entity/Game";
import { BaseController } from "./BaseController";

export class GameController extends BaseController<Game> {

    constructor() {
        super(Game);
    }

    async save(request: Request) {
        let _game = <Game>request.body;
        super.isRequired(_game.name, 'Informe o nome do jogo!');
        super.isRequired(_game.description, 'Informe a descrição do jogo!');
        super.isRequired(_game.teams_limit, 'Informe o limite de equipes!');
        super.isRequired(_game.players_per_team_limit, 'Informe o limite de jogadores por equipe!');
        return super.save(_game);
    } 

}


