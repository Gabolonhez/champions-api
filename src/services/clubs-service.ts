import * as clubsRepository from '../repositories/clubs-repository';
import * as httpResponse from '../utils/http-responses';
import { ClubModel } from '../models/club-model';


export const getClubService = async () => {

    const data = await clubsRepository.findAllClubs();
    let response = null     

    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }
    return response;
}

export const getClubByIdService = async (id: number) => {
    const data = await clubsRepository.findClubById(id);

    let response = null;
    if (data) {
        response = await httpResponse.ok (data);
    } else {
        response = await httpResponse.noContent();
    }
    return response;
}

export const createClubService = async (club: ClubModel) => {
    let response = null;

    if (Object.keys(club).length !== 0) { 
       await clubsRepository.insertClub(club);
       response =  await httpResponse.created();
    }   
    else {
        response = await httpResponse.badRequest();
    }
    return response;
}

export const deleteClubService = async (id: number) => {
    let response = null;
    const isDeleted = await clubsRepository.deleteOneClub(id);

    if (isDeleted) {
        response = await httpResponse.ok({message: "Deleted"})
    } else {
        response = await httpResponse.badRequest();
    }
    return response;
}

export const updateClubService = async (id: number, bodyValue: Partial<ClubModel>) => {
    const data = await clubsRepository.findAndModifyClub(id, bodyValue);
    let response = null;

    if (Object.keys(data).length === 0) { 
        response = await httpResponse.badRequest();
    } else {
        response = await httpResponse.ok(data);
    }

    return response;
}