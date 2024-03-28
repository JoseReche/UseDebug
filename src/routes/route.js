import express from "express";
import ControllerExercicio from "../controllers/controller.js";

const router = express.Router();

const controllers = new ControllerExercicio()

router.post("/somar", controllers.Somar);
router.post("/subtrair", controllers.Subtrair);
router.post("/dividir", controllers.Dividir);
router.post("/multiplicar", controllers.Multiplicar);

export default router;
