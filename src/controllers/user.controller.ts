import { Request, Response } from "express";
import { User } from "../models/User";

class UserController{
    public findAll(req: Request, res: Response){
        User.find().then((users) => res.send(users));
    }

    public create(req: Request, res: Response){
        User.create(req.body).then((response) => res.json(response));
    }

    public findById(req: Request, res: Response) {
        User.findById(req.params.id).populate('profile').then(
            data => res.status(200)
                        .json(data)
        )
    }

    public partialUpdate(req: Request, res: Response) {
        User.findByIdAndUpdate(req.params.id, req.query).then(data => res.status(202).json(data))
    }

    public async replace(req: Request, res: Response) {
        if(!await User.find({nom: req.body.nom, prenom: req.body.prenom})){
            User.create(req.body).then(result => res.status(204).json(result))
        } else {
            User.findOneAndReplace({_id:req.params.id}, req.body).then(() => res.status(202).end())
        }
    }

    public delete(req:Request, res: Response) {
        User.findByIdAndDelete(req.params.id).then(result => res.status(200).json(result))
    }

}

export const userController = Object.freeze(new UserController());