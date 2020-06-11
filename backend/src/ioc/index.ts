import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";

import "middlewares";
import "services";

const createContainer = () => {
  const c = new Container();
  c.load(buildProviderModule());

  return c;
};

const container = createContainer();

export { container, createContainer };
export * from "./bindings";
