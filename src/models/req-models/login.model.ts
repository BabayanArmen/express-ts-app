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

export class Login {
    @IsEmail()
    @IsNotEmpty()
    @Expose()
    email!: string;

    @IsString()
    @IsNotEmpty()
    @Expose()
    password!: string;
}