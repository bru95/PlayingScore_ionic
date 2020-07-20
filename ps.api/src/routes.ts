import { UserController } from "./controller/UserController";
import { GameController } from "./controller/GameController";

export const Routes = [
    { method: "get", route: "/users", controller: UserController, action: "all" }, 
    { method: "get", route: "/users/:id", controller: UserController, action: "one" }, 
    { method: "post", route: "/users", controller: UserController, action: "save" }, 
    { method: "post", route: "/auth", controller: UserController, action: "auth" }, 
    { method: "delete", route: "/users/:id", controller: UserController, action: "remove"},

    { method: "get", route: "/games", controller: GameController, action: "all" }, 
    { method: "get", route: "/games/:id", controller: GameController, action: "one" }, 
    { method: "post", route: "/games", controller: GameController, action: "save" }, 
    { method: "delete", route: "/games/:id", controller: GameController, action: "remove"}
];

