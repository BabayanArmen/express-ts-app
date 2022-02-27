import { credentials } from './db-credentials';
import { IActions } from './interfaces/actions.interface';
import { IObject } from './interfaces/obj.interface'
const mysql = require('mysql2/promise');

export class DBRepository implements IActions{

    constructor() { }

    async getAll(table: string) {
        try {
            const con = await mysql.createConnection(credentials);
            const [results, fields] = await con.execute(`SELECT * FROM ${table}`);
            if(results) return results
            await con.end();
        } catch (error: any) {
            // console.log(error);
            throw new Error(error.sqlMessage);
        }
    }

    async getOneById(table: string, id: number) {
        try {
            const con = await mysql.createConnection(credentials);
            const [results, fields] = await con.execute(`SELECT * FROM ${table} WHERE id = ${id}`);
            if(results) return results
            await con.end();
        } catch (error: any) {
            // console.log(error);
            throw new Error(error.sqlMessage);
        }
    }

    async create(table: string, obj: IObject) {
        let keys = []
        let values = []
        for(let item in {...obj}) {
            keys.push(item)
            values.push(`"${obj[item]}"`)
        }
        let newKeys = keys.join(',')
        let newValues = values.join(',')
        try {
            const con = await mysql.createConnection(credentials);
            const [results, fields] = await con.execute(`INSERT INTO ${table} (${newKeys}) VALUES (${newValues})`);
            if(results) return results.insertId
            await con.end();
        } catch (error: any) {
            // let errorObject = { code: error.code, errno: error.errno, sql: error.sql, sqlState: error.sqlState, sqlMessage: error.sqlMessage }
            // console.log(error);
            throw new Error(error.sqlMessage);
        }
    }

    async update(table: string, obj: IObject) {
        let str = ''
        let counter: number = 1
        for(let item in {...obj}) {
            if(counter == Object.keys(obj).length) {
                str = str + `${item} = "${obj[item]}" `    
            } else {
                str = str + `${item} = "${obj[item]}", `
            } 
            counter++
        }
        try {
            const con = await mysql.createConnection(credentials);
            await con.execute(`UPDATE ${table} SET ${str} WHERE id = ${obj.id};`);
            await con.end();
        } catch (error: any) {
            // console.log(error);
            throw new Error(error.sqlMessage);
        }
    }

    async delete(table: string, id: number) {
        try {
            const con = await mysql.createConnection(credentials);
            let [results, fields] = await con.execute(`SELECT * FROM ${table} WHERE id = ${id}`);
            if(results.length == 0) throw new Error("object dosen't exist")
            await con.execute(`DELETE FROM ${table} WHERE id = ${id}`);
            await con.end();
        } catch (error: any) {
            // console.log(error);
            throw new Error(error.sqlMessage);
        }
    }

}