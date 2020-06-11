import bodyParser from "body-parser";
import config from "config";
import express from "express";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import { ROOT_PATH, TYPE } from "app-constants";
import "controllers";
// import { initDBConnection } from "db";
import { bindings } from "ioc";
import { errorHandlerMiddleware } from "middlewares";

const env = config.get("environment");

export const getInversifyExpressServer: (
  container: Container
) => Promise<InversifyExpressServer> = async (container: Container) => {
  // await initDBConnection();
  await container.loadAsync(bindings);

  const server = new InversifyExpressServer(container, null, {
    rootPath: ROOT_PATH
  });

  server.setErrorConfig(application => {
    application.use(errorHandlerMiddleware);
  });

  server.setConfig(application => {
    application.use(bodyParser.urlencoded({ extended: true }));
    application.use(bodyParser.json());
  });

  return server;
};

export const getExpressApplication: (
  container: Container
) => Promise<express.Application> = async (container: Container) => {
  const inversifyExpressServer = await getInversifyExpressServer(container);
  return inversifyExpressServer.build();
};
