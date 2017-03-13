import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from "../../shared/domain/user";
import { UserService } from "../../shared/service/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/users/users.html",
  styleUrls: ["pages/users/users-common.css", "pages/users/users.css"]
})

export class UsersComponent implements OnInit {
  userList: Array<User> = [];
  isLoading = false;
  listLoaded = false;

  @ViewChild("container") container: ElementRef;

  constructor(private userService: UserService) {}

  add(user: User) {

  }

  showUser() {
    this.userService.fetchAll()
    .then(users => {
      console.dump(users);
      users.forEach((user)=> {
        this.userList.unshift(user);
      })
    }).catch(error => {
      alert("Can't access database.");
    });

  }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
            this.showUser();
        }, 500);
    this.isLoading = false;
    this.listLoaded = true;
  }
}
