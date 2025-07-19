
import { Request, Response } from "express";
import * as clubsService from '../services/clubs-service';

export const getClubs = async (req: Request, res: Response) => {
    
    const httpResponse = await clubsService.getClubService(); 
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getClubsById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const httpResponse = await clubsService.getClubByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postClub = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await clubsService.createClubService(bodyValue);

    if(httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } 
}

export const deleteClub = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const httpResponse = await clubsService.deleteClubService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

 export const updateClub = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    const bodyValue = req.body;
    const httpResponse = await clubsService.updateClubService(id, bodyValue);
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
 }
