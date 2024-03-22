import { Router, Request, Response } from "express";

const router = Router();

router.get("/health-check", (req: Request, res: Response) => {
    res.send({check: "Milton Black E-Commerce Server Running and OK!!!"});
});


export default router;