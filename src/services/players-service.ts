import * as playersRepository from '../repositories/players-repository';
import * as httpResponse from '../utils/http-responses';
import { PlayerModel } from '../models/player-model';

export const getPlayerService = async () => {

    const data = await playersRepository.findAllPlayers();
    let response = null     

    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }
    return response;
}

export const getPlayerByIdService = async (id: number) => {
    const data = await playersRepository.findPlayerById(id);

    let response = null;
    if (data) {
        response = await httpResponse.ok (data);
    } else {
        response = await httpResponse.noContent();
    }
    return response;
}

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;

    if (Object.keys(player).length !== 0) { 
       await playersRepository.insertPlayer(player);
       response = httpResponse.created();
    }   
    else {
        response = httpResponse.badRequest();
    }
    return response;
}