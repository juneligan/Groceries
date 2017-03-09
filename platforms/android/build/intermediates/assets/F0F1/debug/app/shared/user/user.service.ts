import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";
import { Config } from "../config";
import { Couchbase } from "nativescript-couchbase";

var Sqlite = require("nativescript-sqlite");

@Injectable()
export class UserService {

  private database: any;

  constructor(private http: Http) {
    (new Sqlite("my.db")).then(db => {
        db.execSQL(`CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT,
                      emailAddress TEXT, password TEXT, firstname TEXT, lastname TEXT)
        `).then(id => {
            this.database = db;
        }, error => {
            console.log("CREATE TABLE ERROR", error);
        });
    }, error => {
        console.log("OPEN DB ERROR", error);
    });
  }

  public insert() {
        this.database.execSQL(`NSERT INTO user (username, emailAddress, password, firstname, lastname) VALUES (?, ?, ?, ?, ?)`,
                              ["username", "emailAddress", "password", "Nic", "Raboy"])
            .then(id => {
                console.log("INSERT RESULT", id);
                this.fetch();
            }, error => {
                console.log("INSERT ERROR", error);
            });
    }

 
  public fetch() {
    var users = [];
      this.database.all("SELECT * FROM people").then(rows => {
          for(var row in rows) {
              users.push({
                  "firstname": rows[row][1],
                  "lastname": rows[row][2]
              });
              console.log("-------------");
              console.log(rows[row][1]);
              console.log(rows[row][2]);
              console.log("-------------");
          }
      }, error => {
          console.log("SELECT ERROR", error);
      });
  }

  test(user: User) {

    this.database.createDocument(user);
  }

  test2(){
  }

  test3(){
  }

  register(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      Config.apiUrl + "Users",
      JSON.stringify({
        Username: user.email,
        Email: user.email,
        Password: user.password
      }),
      { headers: headers }
    )
    .catch(this.handleErrors);
    // this.database.createDocument(user);

  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

  login(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
        Config.apiUrl + "oauth/token",
        JSON.stringify({
        username: user.email,
        password: user.password,
        grant_type: "password"
        }),
        { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
        Config.token = data.Result.access_token;
    })
    .catch(this.handleErrors);
    }
  
}