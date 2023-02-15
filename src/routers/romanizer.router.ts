import { Router } from "express";
import * as controller from "~/controllers/romanizer.controller";

const router = Router({ mergeParams: true });

router.get("/stream", controller.stream);
router.get("/romanize", controller.romanize);

export default router;