import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveryUseCase";
export class CreateDeliveryController {
  async handle(req: Request, res: Response) {
    const { item_name } = req.body;
    const createDeliveryUseCase = new CreateDeliveryUseCase();
    const result = await createDeliveryUseCase.execute({
      item_name,
      id_client: req.id_client,
    });
    return res.json(result);
  }
}
