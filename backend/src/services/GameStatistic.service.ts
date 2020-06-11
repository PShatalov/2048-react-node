import { provide } from "inversify-binding-decorators";

import { TYPE } from "app-constants";

export interface IGameStatisticService {
  gamesList(userId: string): Promise<{}>;
  saveGame(userId: string): Promise<{}>;
  userHighestGameScore(userId: string): Promise<{}>;
  bestPlayersList(): Promise<{}>;
}

@provide(TYPE.GameStatisticService)
export class GameStatisticService implements IGameStatisticService {
  public async gamesList(userId: string): Promise<{}> {
    return { result: "User games list" };
  }
  public async saveGame(userId: string): Promise<{}> {
    return { result: "User game saved" };
  }
  public async userHighestGameScore(userId: string): Promise<{}> {
    return { result: "User higher score" };
  }
  public async bestPlayersList(): Promise<{}> {
    return { result: "Best players list" };
  }
}
