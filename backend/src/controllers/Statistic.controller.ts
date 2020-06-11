import * as express from "express";
import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPatch,
  httpPost,
  request
} from "inversify-express-utils";

import { TYPE } from "app-constants";
import { IGameStatisticService } from "services";

@controller("/statistics")
export class StatisticController extends BaseHttpController {
  constructor(
    @inject(TYPE.GameStatisticService)
    private readonly gameStatisticService: IGameStatisticService
  ) {
    super();
  }

  @httpPost("/:id")
  public async saveGame(
    @request()
    req: express.Request
  ) {
    const { id } = req.params;
    return this.json(await this.gameStatisticService.saveGame(id));
  }
  @httpGet("/:id")
  public async list(
    @request()
    req: express.Request
  ) {
    const { id } = req.params;
    return this.json(await this.gameStatisticService.gamesList(id));
  }
  @httpGet("/:id/max-score")
  public async userHighestScore(
    @request()
    req: express.Request
  ) {
    const { id } = req.params;
    return this.json(await this.gameStatisticService.userHighestGameScore(id));
  }
  @httpGet("/ranking")
  public async bestPlayers() {
    return this.json(await this.gameStatisticService.bestPlayersList());
  }
}
