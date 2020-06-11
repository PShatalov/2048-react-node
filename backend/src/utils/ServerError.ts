import * as HttpStatus from "http-status-codes";
import * as _ from "lodash";

import { SERVER_ERROR } from "app-constants";

interface ServerErrorInterface {
  message?: string;
  detail?: string;
  status?: number | string;
  rootError?: Error | null;
  name?: string;
}

/**
 * Customizing Error for logging and show more info
 */
export class ServerError extends Error {
  /**
   * Create and log ServerError
   * @param {String} [options.name] The name of error
   * @param {String} [options.message] The message of error
   * @param {Number | String} [options.status] The status of error
   * @param {String} [options.detail] The detail of error
   * @param {any} [options.rootError] Native error object
   */
  public static loggedServerError(options: ServerErrorInterface): ServerError {
    const serverError: ServerError = new ServerError(options);
    return serverError;
  }

  public name: string;
  public detail: string;
  public status: number;
  public rootError: any;

  /**
   * Customizing error for logging and show more info
   * @param name The name of error
   * @param message The message of error
   * @param status The status of error
   * @param detail The detail of error
   * @param rootError Native error object
   */
  constructor({
    name = SERVER_ERROR,
    message = "",
    status,
    detail = "",
    rootError = null
  }: ServerErrorInterface) {
    super(message);

    this.name = name;
    this.detail = detail;
    this.message = message;
    this.status =
      status === undefined
        ? _.get(rootError, "statusCode", HttpStatus.INTERNAL_SERVER_ERROR)
        : status;
    this.rootError = rootError;
  }
}
