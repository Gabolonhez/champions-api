import * as playersRepository from '../repositories/players-repository';
import * as httpResponse from '../utils/http-responses';
import { PlayerModel } from '../models/player-model';
import { StatisticsModel } from '../models/statistics-model';
import { MESSAGES } from '../utils/messages';

export const getPlayerService = async () => {
    try {
        const data = await playersRepository.findAllPlayers();
        
        if (data && data.length > 0) {
            return await httpResponse.ok(data);
        } else {
            return await httpResponse.noContent();
        }
    } catch (error) {
        return await httpResponse.badRequest();
    }
}

export const getPlayerByIdService = async (id: number) => {
    if (!id || id <= 0) {
        return await httpResponse.badRequest();
    }
    
    const data = await playersRepository.findPlayerById(id);
    let response = null;

    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }
    return response;
}

export const createPlayerService = async (player: PlayerModel) => {
    if (!player || typeof player !== 'object' || Object.keys(player).length === 0) {
        return await httpResponse.badRequest();
    }

    if (!player.name || !player.club || !player.nationality || !player.position) {
        return await httpResponse.badRequest();
    }

    let response = null;
    
    try {
        await playersRepository.insertPlayer(player);
        response = await httpResponse.created();
    } catch (error) {
        response = await httpResponse.badRequest();
    }
    
    return response;
}

export const deletePlayerService = async (id: number) => {
    if (!id || id <= 0) {
        return await httpResponse.badRequest();
    }

    let response = null;
    const isDeleted = await playersRepository.deleteOnePlayer(id);

    if (isDeleted) {
        response = await httpResponse.ok({message: MESSAGES.DELETED});
    } else {
        response = await httpResponse.badRequest();
    }
    return response;
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    if (!id || id <= 0) {
        return await httpResponse.badRequest();
    }

    if (!statistics || typeof statistics !== 'object' || Object.keys(statistics).length === 0) {
        return await httpResponse.badRequest();
    }

    const data = await playersRepository.findAndModifyPlayer(id, statistics);
    let response = null;

    if (data && typeof data === 'object' && Object.keys(data).length > 0) {
        response = await httpResponse.ok({message: MESSAGES.UPDATED, data});
    } else {
        response = await httpResponse.badRequest();
    }
    return response;
}