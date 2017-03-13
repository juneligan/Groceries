import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Component } from "@angular/core";
import { UserDao } from "../../shared/dao/user.dao";

import { User } from "../domain/user";
import { Config } from "../config";
import { Couchbase } from "nativescript-couchbase";

var Sqlite = require("nativescript-sqlite");

@Injectable()
export class UserService {

  private database: any;

  constructor(private userDao: UserDao, private http: Http) {}


  test(user: User) {

    user.username = "test12345"
  }

  register(user: User): Promise<User | string> {
    return new Promise((resolve, reject) => {
      this.userDao.fetchUserByUsernameOrEmailAddress(user)
      .then(result => {
        reject(null)
      }).catch(error => {
        this.userDao.insert(user).
        then(result => {
          resolve(result)})
        .catch(error =>{
          reject("Failed to insert User.");// need exception here;
        });

      });
    });
  }

  fetchAll(): Promise<Array<User>> {
    return new Promise((resolve, reject) => {
      this.userDao.fetchAll()
      .then(result => {
        resolve(result);
      }).catch(error => {
        reject(error);
      });
    });
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

  login(user: User): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.userDao.fetchUser(user)
      .then(result => {
        resolve(true);
      }).catch(error => {
        reject(false);
      });
    });
  }
  
} 