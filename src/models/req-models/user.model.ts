import { Test } from './test.model';
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
    IsArray,
  } from 'class-validator';
  import { Expose, plainToClass, Type } from 'class-transformer';
import { Login } from './login.model';
import 'reflect-metadata';

export class User {
    @IsString()
    @IsNotEmpty()
    @Expose()
    name!: string;

    @IsInt()
    @IsNotEmpty()
    @Expose()
    age!: number;

    @ValidateNested()
    @IsNotEmpty()
    @Expose()
    @Type(() => Login)
    login!: Login;

    @ValidateNested()
    @IsNotEmpty()
    @IsArray()
    @Expose()
    @Type(() => Test)
    tests!: Test[];
}