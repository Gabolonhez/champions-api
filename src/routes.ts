import Router from 'express';
import * as PlayerController from './controllers/players-controller';


const router = Router();

router.get("/players", PlayerController.getPlayers);
router.get("/players/:id", PlayerController.getPlayerById);

router.delete("players/:id", PlayerController.deletePlayer);
router.patch("/players/:id", PlayerController.updatePlayer);

router.post("/players", PlayerController.postPlayer);


export default router;