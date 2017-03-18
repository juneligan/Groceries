
import { Injectable } from "@angular/core";
import { Category } from "../domain/category";
import { Config } from "../config";

var Sqlite = require("nativescript-sqlite");

@Injectable()
export class CategoryDao {

    private database: any;
    private isInstantiated: boolean;

    constructor() {
        if(!this.isInstantiated) {
            (new Sqlite(Config.databaseName)).then(db => {
                db.execSQL(`CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)
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

    public insert(category: Category): Promise<Category> {
        return new Promise((resolve, reject) => {
            this.database.execSQL(`INSERT INTO category (name) VALUES (?)`,[category.name])
            .then(id => {
                console.log("INSERT RESULT", id);
                resolve(this.fetchById(id));
            }, error => {
                console.log("INSERT ERROR", error);
            });
        });
    }

    public fetchById(id: number): Promise<Category> {
        return new Promise((resolve, reject) => {
            this.database.execSQL(`SELECT id, name from category where id = ?`,[id])
            .then(rows => {
              let category = new Category();
              for(var row in rows) {
                  category.id = rows[row][0];
                  category.name = rows[row][1];
              }
              resolve(category);
            }, error => {
                reject(error);
            });
        });
    }

    public fetchByName(name: string): Promise<Category> {
        return new Promise((resolve, reject) => {
            this.database.execSQL(`SELECT id, name from category where id = ?`,[name])
            .then(rows => {
              let category = new Category();
              for(var row in rows) {
                  category.id = rows[row][0];
                  category.name = rows[row][1];
              }
              resolve(category);
            }, error => {
                reject(error);
            });
        });
    }
}