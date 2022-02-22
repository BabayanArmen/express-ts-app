import { Question } from './question.mode';
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
import 'reflect-metadata';

export class Test {
    @IsString()
    @IsNotEmpty()
    @Expose()
    title!: string;

    @ValidateNested()
    @IsNotEmpty()
    @IsArray()
    @Expose()
    @Type(() => Question)
    questions!: Question[];
}