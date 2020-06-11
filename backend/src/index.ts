import "reflect-metadata";

import config from "config";
import { container } from "ioc";

import { getExpressApplication } from "server";

const PORT: number = config.get("port");

(async () => {
  const app = await getExpressApplication(container);
  app.listen(PORT);
  console.log(`SERVER STARTED ${PORT}`);
})();
