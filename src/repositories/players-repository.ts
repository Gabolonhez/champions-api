import { PlayerModel } from '../models/player-model';
import { StatisticsModel } from '../models/statistics-model';

const database: PlayerModel[] = [
  {
    "id": 1,
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "Overall": 93,
      "Pace": 85,
      "Shooting": 94,
      "Passing": 91,
      "Dribbling": 95,
      "Defending": 38,
      "Physical": 65
    }
  },
  {
    "id": 2,
    "name": "Cristiano Ronaldo",
    "club": "Al Nassr",
    "nationality": "Portugal",
    "position": "Forward",
    "statistics": {
      "Overall": 90,
      "Pace": 81,
      "Shooting": 93,
      "Passing": 80,
      "Dribbling": 85,
      "Defending": 35,
      "Physical": 78
    }
  },
  {
    "id": 3,
    "name": "Neymar Jr.",
    "club": "Al Hilal",
    "nationality": "Brazil",
    "position": "Forward",
    "statistics": {
      "Overall": 89,
      "Pace": 91,
      "Shooting": 85,
      "Passing": 87,
      "Dribbling": 94,
      "Defending": 37,
      "Physical": 61
    }
  },
  {
    "id": 4,
    "name": "Kevin De Bruyne",
    "club": "Manchester City",
    "nationality": "Belgium",
    "position": "Midfielder",
    "statistics": {
      "Overall": 91,
      "Pace": 74,
      "Shooting": 88,
      "Passing": 94,
      "Dribbling": 87,
      "Defending": 65,
      "Physical": 77
    }
  },
  {
    "id": 5,
    "name": "Kylian Mbappé",
    "club": "Real Madrid",
    "nationality": "France",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 97,
      "Shooting": 90,
      "Passing": 80,
      "Dribbling": 92,
      "Defending": 36,
      "Physical": 78
    }
  }
]

export const findAllPlayers = async (): Promise<PlayerModel[]>=> {
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel): Promise<PlayerModel> => {
  database.push(player);
  return player;
}

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex(player => player.id === id);

  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }
  return false;
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel>  => {
  const playerIndex = database.findIndex(player => player.id === id);

  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
}