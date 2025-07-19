import { ClubModel } from '../models/club-model';
import fs from 'fs/promises';


export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = fs.readFile("src/data/clubs.json", "utf-8");

    const clubs: ClubModel[] = JSON.parse(await data);

    return clubs;
}

export const findClubById = async (id: number): Promise<ClubModel | undefined> => {
  const data = fs.readFile("src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(await data);

  return clubs.find(player => player.id === id);
}

export const insertClub = async (club: ClubModel): Promise<ClubModel> => {
  const data = fs.readFile("src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(await data);

  clubs.push(club);
  return club;
}

export const deleteOneClub = async (id: number) => {
  const data = fs.readFile("src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(await data);

  const index = clubs.findIndex(club => club.id === id);

  if (index !== -1) {
    clubs.splice(index, 1);
    return true;
  }
  return false;
}

export const findAndModifyClub = async (
  id: number,
  bodyValue: Partial<ClubModel>
): Promise<ClubModel | undefined> => {
  const data = fs.readFile("src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(await data);

  const clubIndex: number = clubs.findIndex((club: ClubModel) => club.id === id);

  if (clubIndex !== -1) {
    clubs[clubIndex].name = bodyValue.name || clubs[clubIndex].name;
    clubs[clubIndex].country = bodyValue.country || clubs[clubIndex].country;
    return clubs[clubIndex];
  }

  return undefined;
}