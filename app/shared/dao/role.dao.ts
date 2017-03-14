
import { Injectable } from "@angular/core";
import { Product } from "../domain/product";
import { Config } from "../config";

var Sqlite = require("nativescript-sqlite");

@Injectable()
export class RoleDao {

    private database: any;
    private isInstantiated: boolean;

    constructor() {
        if(!this.isInstantiated) {
            (new Sqlite(Config.databaseName)).then(db => {
                db.execSQL(`CREATE TABLE IF NOT EXISTS role (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)
                `).then(id => {
                    this.database = db;
                    this.isInstantiated = true;
                }, error => {
                    console.log("CREATE TABLE ERROR", error);
                });
            }, error => {
                console.log("OPEN DB ERROR", error);
            });
        }
    }
}