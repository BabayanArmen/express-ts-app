import { ClassConstructor, Expose, plainToClass, Type } from 'class-transformer';
import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  IsString,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export function validateBody(cls: ClassConstructor<any>) {
    return function(req: Request, res: Response, next: NextFunction) {
        let user = plainToClass(cls, req.body);
        validate(user).then((errors) => {
            if(errors.length === 0) {
                next()
            }else {
                res.status(400).send({
                    "message": "invalid request body",
                    errors
                })
            }
        })
    }
}

export function validateQuery(list: string[]) {
    return function(req: Request, res: Response, next: NextFunction) {
        if(Object.keys(req.query).length !== 0) {
            list.forEach(item => {
                if(!(item in req.query) || req.query[item] === '') {
                    return res.status(400).send(`${item} is required in queries`)
                }
            })
        } else {
            return res.status(400).send(`query params are required`)
        }
        next()
    }
}

export function validateParams() {
    return function(req: Request, res: Response, next: NextFunction) {
        if(Object.keys(req.params).length === 0) {
            return res.status(400).send(`params are required`)
        }
        next()
    }
}