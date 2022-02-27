npm init
npm i express
npm i --save-dev typescript @types/express @types/node
npx tsc --init
npm i --save-dev ts-node nodemon


# /////////////// for requests body validation using validatojs //////////////
class-validator // https://www.npmjs.com/package/class-validator
    npm i class-validator
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

class-transformer // https://www.npmjs.com/package/class-transformer
    npm install class-transformer --save
    reflect-metadata shim is required, install it too:
    npm install reflect-metadata --save
    and make sure to import it in a global place, like app.ts:
    import 'reflect-metadata';
    import { ClassConstructor, Expose, plainToClass, Type } from 'class-transformer';
# ///////////////////////////////////////////////////////////////////////////////////

for mysql use
mysql -- npm i mysql

or mysql2 -- npm install mysql2