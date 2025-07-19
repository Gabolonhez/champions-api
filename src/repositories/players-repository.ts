import { PlayerModel } from '../models/player-model';
import { StatisticsModel } from '../models/statistics-model';
import fs from 'fs/promises';


export const findAllPlayers = async (): Promise<PlayerModel[]>=> {
  const data = fs.readFile("src/data/players.json", "utf-8");
  const players: PlayerModel[] = JSON.parse(await data);
  return players;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  const data = fs.readFile("src/data/players.json", "utf-8");
  const players: PlayerModel[] = JSON.parse(await data);

  return players.find(player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel): Promise<PlayerModel> => {
  const data = fs.readFile("src/data/players.json", "utf-8");
  const players: PlayerModel[] = JSON.parse(await data);

  players.push(player);
  return player;
}

export const deleteOnePlayer = async (id: number) => {
  const data = fs.readFile("src/data/players.json", "utf-8");
  const players: PlayerModel[] = JSON.parse(await data);

  const index = players.findIndex(player => player.id === id);

  if (index !== -1) {
    players.splice(index, 1);
    return true;
  }
  return false;
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel>  => {
  const data = fs.readFile("src/data/players.json", "utf-8");
  const players: PlayerModel[] = JSON.parse(await data);
 
  const playerIndex = players.findIndex(player => player.id === id);

  if (playerIndex !== -1) {
    players[playerIndex].statistics = statistics;
  }

  return players[playerIndex];
}