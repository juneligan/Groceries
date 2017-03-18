import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Component } from "@angular/core";
import { RoleDao } from "../../shared/dao/role.dao";

import { Role } from "../domain/role";
import { Config } from "../config";

var Sqlite = require("nativescript-sqlite");

@Injectable()
export class RoleService {

  private database: any;

  constructor(private roleDao: RoleDao) {}

  addRole(role: Role): Promise<Role> {
    return new Promise((resolve, reject) => {
      this.roleDao.insert(role)
      .then(result => {resolve(result)})
      .catch(error=> {reject(error)})
    });
  }

  // fetchRoleByName(role: Role): Promise<Role> {
  //   return new Promise((resolve, reject) => {
  //     this.roleDao.f(role)
  //     .then(result => {resolve(result)})
  //     .catch(error=> {reject(error)})
  //   });
  // }

        // this.userDao.insert(user).
        // then(result => {
        //   resolve(result)})
        // .catch(error =>{
        //   reject("Failed to insert User.");// need exception here;
        // });

  // fetchAll(): Promise<Array<User>> {
  //   return new Promise((resolve, reject) => {
  //     this.userDao.fetchAll()
  //     .then(result => {
  //       resolve(result);
  //     }).catch(error => {
  //       reject(error);
  //     });
  //   });
  // }

  // handleErrors(error: Response) {
  //   console.log(JSON.stringify(error.json()));
  //   return Observable.throw(error);
  // }

  // login(user: User): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     this.userDao.fetchUser(user)
  //     .then(result => {
  //               console.log("IM HERE");
  //       resolve(true);
  //     }).catch(error => {
  //       reject(false);
  //     });
  //   });
  // }
  
} 