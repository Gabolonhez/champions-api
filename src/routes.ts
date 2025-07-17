import Router from 'express';
import * as PlayerController from './controllers/players-controller';


const router = Router();

router.get("/players", PlayerController.getPlayers);
router.get("/players/:id", PlayerController.getPlayerById);
router.post("/players", PlayerController.postPlayer);


export default router;