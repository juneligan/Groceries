import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from "../../shared/domain/user";
import { UserService } from "../../shared/service/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/dashboard/dashboard.html",
  styleUrls: ["pages/dashboard/dashboard-common.css", "pages/dashboard/dashboard.css"]
})

export class DashboardComponent implements OnInit {
  userList: Array<User> = [];
  isLoading = false;
  listLoaded = false;

  @ViewChild("container") container: ElementRef;

  constructor(private fonticon: TNSFontIconService, private router: Router, private userService: UserService) {}

  add(user: User) {

  }
  submit() {
    this.router.navigate(["/users"]);
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
