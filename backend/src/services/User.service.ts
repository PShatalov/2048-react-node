import { provide } from "inversify-binding-decorators";

import { TYPE } from "app-constants";

export interface IUserService {
  create(): Promise<{}>;
  update(): Promise<{}>;
  list(): Promise<{}>;
  getOne(): Promise<{}>;
}

@provide(TYPE.UserService)
export class UserService implements IUserService {
  public async create(): Promise<{}> {
    return { result: "User Created" };
  }
  public async update(): Promise<{}> {
    return { result: "User Updated" };
  }
  public async list(): Promise<{}> {
    return { result: "User list" };
  }
  public async getOne(): Promise<{}> {
    return { result: "One User" };
  }
}
