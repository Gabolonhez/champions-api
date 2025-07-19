import Router from 'express';
import * as PlayerController from './controllers/players-controller';
import * as ClubController from './controllers/clubs-controller';

const router = Router();

// Players routes

router.get("/players", PlayerController.getPlayers);
router.get("/players/:id", PlayerController.getPlayerById);

router.delete("players/:id", PlayerController.deletePlayer);

router.patch("/players/:id", PlayerController.updatePlayer);

router.post("/players", PlayerController.postPlayer);


// Clubs routes

router.get("/clubs", ClubController.getClubs);
router.get("/clubs/:id", ClubController.getClubsById);

router.delete("/clubs/:id", ClubController.deleteClub);

router.patch("/clubs/:id", ClubController.updateClub);

router.post("/clubs", ClubController.postClub);



export default router;