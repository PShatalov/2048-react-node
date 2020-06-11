import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPatch,
  httpPost
} from "inversify-express-utils";

import { TYPE } from "app-constants";
import { IUserService } from "services";

@controller("/users")
export class InternalController extends BaseHttpController {
  constructor(
    @inject(TYPE.UserService)
    private readonly userService: IUserService
  ) {
    super();
  }

  @httpPost("/")
  public async create() {
    return this.json(await this.userService.create());
  }
  @httpGet("/")
  public async list() {
    return this.json(await this.userService.list());
  }
  @httpGet("/:id")
  public async profile() {
    return this.json(await this.userService.getOne());
  }
  @httpPatch("/:id")
  public async updateProfile() {
    return this.json(await this.userService.update());
  }
}
