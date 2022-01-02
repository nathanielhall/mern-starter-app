import * as express from 'express'

export abstract class BaseController {
  public static jsonResponse(
    res: express.Response,
    code: number,
    message: string
  ) {
    return res.status(code).json({ message })
  }

  public ok(res: express.Response) {
    return res.sendStatus(200)
  }

  public created(res: express.Response) {
    return res.sendStatus(201)
  }

  public clientError(res: express.Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      400,
      message ? message : 'Unauthorized'
    )
  }

  public unauthorized(res: express.Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      401,
      message ? message : 'Unauthorized'
    )
  }

  public paymentRequired(res: express.Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      402,
      message ? message : 'Payment required'
    )
  }

  public forbidden(res: express.Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      403,
      message ? message : 'Forbidden'
    )
  }

  public notFound(res: express.Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      404,
      message ? message : 'Not found'
    )
  }

  public conflict(res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 409, message ? message : 'Conflict')
  }

  public tooMany(res: express.Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      429,
      message ? message : 'Too many requests'
    )
  }

  public todo(res: express.Response) {
    return BaseController.jsonResponse(res, 400, 'TODO')
  }

  public fail(res: express.Response, error: Error | string) {
    console.log(error)
    return res.status(500).json({
      message: error.toString()
    })
  }
}
export class Result<T> {
  public isSuccess: boolean
  public isFailure: boolean
  public error: string
  private _value: T

  private constructor(isSuccess: boolean, error?: string, value?: T) {
    if (isSuccess && error) {
      throw new Error(`InvalidOperation: A result cannot be 
        successful and contain an error`)
    }
    if (!isSuccess && !error) {
      throw new Error(`InvalidOperation: A failing result 
        needs to contain an error message`)
    }

    this.isSuccess = isSuccess
    this.isFailure = !isSuccess
    this.error = error
    this._value = value

    Object.freeze(this)
  }

  public getValue(): T {
    if (!this.isSuccess) {
      throw new Error(`Cant retrieve the value from a failed result.`)
    }

    return this._value
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, null, value)
  }

  public static fail<U>(error: string): Result<U> {
    return new Result<U>(false, error)
  }

  public static combine(results: Result<any>[]): Result<any> {
    for (let result of results) {
      if (result.isFailure) return result
    }
    return Result.ok<any>()
  }
}
