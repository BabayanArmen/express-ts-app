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
import { Expose, plainToClass, Type } from 'class-transformer';
import 'reflect-metadata';

export class Question {
    @IsString()
    @IsNotEmpty()
    @Expose()
    question!: string;
}