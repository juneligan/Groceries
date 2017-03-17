
import { Injectable } from "@angular/core";
import { Role } from "../domain/role";
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

    public insert(role: Role): Promise<Role> {
        return new Promise((resolve, reject) => {
            this.database.execSQL(`INSERT INTO role (name) VALUES (?)`,
                                [role.name])
            .then(id => {
                console.log("INSERT RESULT", id);
                resolve(this.fetchRoleById(id));
            }, error => {
                console.log("INSERT ERROR", error);
            });
        });
    }

    public fetchRoleById(id: any): Promise<Role> {
        return new Promise((resolve, reject) => {
        this.database.all("SELECT * FROM role where id = ?", [id]).then(rows => {
            let roles = []
                for(var row in rows) {
                    roles.push({
                        "id": rows[row][0],
                        "name": rows[row][1]
                    });
                }
                resolve(roles);
            }, error => {
                reject(error);
            });
        });
    }
}