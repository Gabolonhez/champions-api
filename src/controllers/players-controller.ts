import {Request, Response} from 'express';
import * as playersService from '../services/players-service';
import { StatisticsModel } from '../models/statistics-model';

export const getPlayers = async (req: Request, res: Response) => {
    
    const httpResponse = await playersService.getPlayerService(); 
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const httpResponse = await playersService.getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await playersService.createPlayerService(bodyValue);

    if(httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } 
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const httpResponse = await playersService.deletePlayerService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

 export const updatePlayer = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    const bodyValue: StatisticsModel = req.body;
    const httpResponse = await playersService.updatePlayerService(id, bodyValue);
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
 }