import { Request, Response } from "express";
import { User } from "../models/User";

class UserController{
    public findAll(req: Request, res: Response){
        User.find().then((users) => res.send(users));
    }

    public create(req: Request, res: Response){
        User.create(req.body).then((response) => res.json(response));
    }
}

export const userController = Object.freeze(new UserController());