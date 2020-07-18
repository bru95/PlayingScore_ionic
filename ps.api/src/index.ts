import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import config from "./include/config";
import * as cors from 'cors';
import auth from './middleware/auth';

// create express app
const app = express();
app.use(bodyParser.json());

//app.use(auth);

app.use(cors());

// register express routes from defined application routes
Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = (new (route.controller as any))[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });
});

app.listen(config.port, '0.0.0.0', async () => {
    try {
        await createConnection();
        console.log('Banco de dados conectado');
    } catch(error) {
        console.log(`Error to connect to database: ${error}`)
    }
});