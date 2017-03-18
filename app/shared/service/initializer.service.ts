import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Component } from "@angular/core";
import { UserDao } from "../../shared/dao/user.dao";
import { CategoryDao } from "../../shared/dao/category.dao";
import { RoleDao } from "../../shared/dao/role.dao";

import { User } from "../domain/user";
import { Role } from "../domain/role";
import { Config } from "../config";
import { UserService } from "../../shared/service/user.service";
import { RoleService } from "../../shared/service/role.service";

var Sqlite = require("nativescript-sqlite");

@Injectable()
export class InitializerService {

  private database: any;

  constructor(private userService: UserService, private roleService: RoleService) {}

  initializeRolesAndUsers() {
    let roleAdmin = new Role();
    roleAdmin.name = "ADMIN";
    this.roleService.addRole(roleAdmin).then(insertedRoleAdmin => {
      this.initializeAdminUser(insertedRoleAdmin);
    });
    

    let roleCustomer = new Role();
    roleCustomer.name = "CUSTOMER";
    this.roleService.addRole(roleCustomer).then(insertedRoleCustomer => {
      this.initializeCustomerUser(insertedRoleCustomer);
    });
    
  }

  initializeAdminUser(role: Role) {
    let userAdmin = new User();
    userAdmin.emailAddress = "user.admin@yopmail.com";
    userAdmin.username = "usernameAdmin";
    userAdmin.firstname = "user";
    userAdmin.lastname = "admin";
    userAdmin.password = "passwordAdmin";
    userAdmin.role = role;

    this.register(userAdmin);
  }

  initializeCustomerUser(role: Role) {
    let userCustomer = new User();
    userCustomer.emailAddress = "user.customer@yopmail.com";
    userCustomer.username = "usernameCustomer";
    userCustomer.firstname = "customer";
    userCustomer.lastname = "user";
    userCustomer.password = "passwordCustomer";
    userCustomer.role = role;

    this.register(userCustomer);
  }

  register(user: User) {
    this.userService.register(user)
    .then(result => {
      console.log("Account added successfully.");
    }).catch(error => {
      console.log("Account already exists.");
    });
  }
  
} 