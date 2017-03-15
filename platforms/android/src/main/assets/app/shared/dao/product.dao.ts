
import { Injectable } from "@angular/core";
import { Product } from "../domain/product";
import { Config } from "../config";

var Sqlite = require("nativescript-sqlite");

@Injectable()
export class ProductDao {

    private database: any;
    private isInstantiated: boolean;

    constructor() {
        if(!this.isInstantiated) {
            (new Sqlite(Config.databaseName)).then(db => {
                db.execSQL(`CREATE TABLE IF NOT EXISTS product (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,
                            unitPrice TEXT, sellPrice TEXT)
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


    // public insert(product: Product): Promise<Product> {
    //     return new Promise((resolve, reject) => {
    //         this.database.execSQL(`INSERT INTO user (username, emailAddress, password, firstname, lastname) VALUES (?, ?, ?, ?, ?)`,
    //                             [product.username, user.emailAddress, user.password, user.firstname, user.lastname])
    //         .then(id => {
    //             console.log("INSERT RESULT", id);
    //             resolve(this.fetchUserById(id));
    //         }, error => {
    //             console.log("INSERT ERROR", error);
    //         });
    //     });
    // }

    // public fetchUserById(id: any): Promise<User> {
    //     return new Promise((resolve, reject) => {
    //     this.database.all("SELECT * FROM user where id = ?", [id]).then(rows => {
    //             let users = [];
    //             for(var row in rows) {
    //                 users.push({
    //                     "id": rows[row][0],
    //                     "firstname": rows[row][1],
    //                     "lastname": rows[row][2]
    //                 });
    //             }
    //             resolve(users);
    //         }, error => {
    //             reject(error);
    //         });
    //     });
    // }


    // public fetchUserByUsernameOrEmailAddress(user: User): Promise<User> {
    //     console.log(user.emailAddress);
    //     console.log(user.username);
    //     console.log(user.password);
    //     return new Promise((resolve, reject) => {
    //         this.database.all("SELECT id, firstname, lastname, username, emailAddress FROM user where emailAddress = ? OR username = ?",
    //         [user.emailAddress, user.username]).then(rows => {
    //          let users = [];
    //             for(var row in rows) {
    //                 users.push({
    //                     "id": rows[row][0],
    //                     "firstname": rows[row][1],
    //                     "lastname": rows[row][2],
    //                     "username": rows[row][3],
    //                     "emailAddress": rows[row][4]
    //                 });
    //             }
    //             resolve(users);
    //         }, error => {
    //             reject(null);
    //         });
    //     });
    // }

    // public fetchUser(user: User): Promise<User> {
    //     return new Promise((resolve, reject) => {
    //         this.database.all("SELECT id, firstname, lastname, username, emailAddress FROM user where (emailAddress = ?) AND password = ?",
    //         [user.emailAddress, user.password]).then(rows => {
    //          let users = [];
    //             for(var row in rows) {
    //                 users.push({
    //                     "id": rows[row][0],
    //                     "firstname": rows[row][1],
    //                     "lastname": rows[row][2],
    //                     "username": rows[row][3],
    //                     "emailAddress": rows[row][4]
    //                 });
    //             }
    //             resolve(users);
    //         }, error => {
    //             reject(null);
    //         });
    //     });
    // }

    // public fetchAll() {
    // var users = [];
    //     this.database.all("SELECT * FROM user").then(rows => {
    //         for(var row in rows) {
    //             users.push({
    //                 "firstname": rows[row][1],
    //                 "lastname": rows[row][2]
    //             });
    //         }
    //     }, error => {
    //         console.log("SELECT ERROR", error);
    //     });
    // }

}