
import { Injectable } from "@angular/core";
import { User } from "../domain/user";
import { Config } from "../config";

var Sqlite = require("nativescript-sqlite");

@Injectable()
export class UserDao {

    private database: any;
    private isInstantiated: boolean;

    constructor() {
        if(!this.isInstantiated) {
            (new Sqlite(Config.databaseName)).then(db => {
                db.execSQL(`CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT,
                            emailAddress TEXT, password TEXT, firstname TEXT, lastname TEXT, roleId INTEGER,
                            FOREIGN KEY(roleId) REFERENCES role(id))
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

    public insert(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            this.database.execSQL(`INSERT INTO user (username, emailAddress, password, firstname, lastname) VALUES (?, ?, ?, ?, ?)`,
                                [user.username, user.emailAddress, user.password, user.firstname, user.lastname])
            .then(id => {
                console.log("INSERT RESULT", id);
                resolve(this.fetchUserById(id));
            }, error => {
                console.log("INSERT ERROR", error);
            });
        });
    }

    public fetchUserById(id: any): Promise<User> {
        return new Promise((resolve, reject) => {
        this.database.all("SELECT * FROM user where id = ?", [id]).then(rows => {
                let users = [];
                for(var row in rows) {
                    users.push({
                        "id": rows[row][0],
                        "firstname": rows[row][1],
                        "lastname": rows[row][2]
                    });
                }
                resolve(users);
            }, error => {
                reject(error);
            });
        });
    }


    public fetchUserByEmailAddress(user: User): Promise<User> {
        console.log(user.emailAddress);
        console.log(user.username);
        console.log(user.password);
        return new Promise((resolve, reject) => {
            this.database.all("SELECT id, firstname, lastname, username, emailAddress FROM user where emailAddress = ?",
            [user.emailAddress]).then(rows => {
             let users = [];
                for(var row in rows) {
                    users.push({
                        "id": rows[row][0],
                        "firstname": rows[row][1],
                        "lastname": rows[row][2],
                        "username": rows[row][3],
                        "emailAddress": rows[row][4]
                    });
                }
                console.log("IM HERE");
                if(users.length > 0) {
                    resolve(users);
                } else {
                    reject(null);
                }
            }, error => {

                console.log("IM HERE REJECTED");
                reject(null);
            });
        });
    }

    public searchString(userString: any) {
        
        return new Promise((resolve, reject) => {
            this.database.all("SELECT id, firstname, lastname, username, emailAddress FROM user where (emailAddress like '%?%') OR (username like '%?%')"
            ,[userString]).then(rows => {
             let users = [];
                for(var row in rows) {
                    users.push({
                        "id": rows[row][0],
                        "firstname": rows[row][1],
                        "lastname": rows[row][2],
                        "username": rows[row][3],
                        "emailAddress": rows[row][4]
                    });
                }
                console.log("IM HERE");
                if(users.length > 0) {
                    resolve(users);
                } else {
                    reject(null);
                }
            }, error => {

                console.log("IM HERE REJECTED");
                reject(null);
            });
        });
    }

    public fetchUser(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            this.database.all("SELECT id, firstname, lastname, username, emailAddress FROM user where (emailAddress = ?) AND password = ?",
            [user.emailAddress, user.password]).then(rows => {
             let users = [];
                for(var row in rows) {
                    users.push({
                        "id": rows[row][0],
                        "firstname": rows[row][1],
                        "lastname": rows[row][2],
                        "username": rows[row][3],
                        "emailAddress": rows[row][4]
                    });
                }
                if(users.length > 0) {
                    resolve(users);
                } else {
                    reject(null);
                }
            }, error => {
                reject(null);
            });
        });
    }

    public fetchAll(): Promise<Array<User>> {
        return new Promise((resolve, reject) => {
            this.database.all("SELECT id, firstname, lastname, username, emailAddress FROM user").then(rows => {
            let users = [];
                for(var row in rows) {
                    users.push({

                    "id": rows[row][0],
                    "firstname": rows[row][1],
                    "lastname": rows[row][2],
                    "username": rows[row][3],
                    "emailAddress": rows[row][4],
                    });
                }
                resolve(users);
            }, error => {
                console.log("SELECT ERROR", error);
                reject([]);
            });
        });
    }

}