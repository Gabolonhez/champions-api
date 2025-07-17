import {Request, Response} from 'express';
import * as playersService from '../services/players-service';
import * as httpResponses from '../utils/http-responses';

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