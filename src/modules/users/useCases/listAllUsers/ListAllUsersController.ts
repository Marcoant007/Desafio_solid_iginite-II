import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.send(users);
    } catch (error) {
      return response.status(400).send(error.message);
    }
  }
}

export { ListAllUsersController };
