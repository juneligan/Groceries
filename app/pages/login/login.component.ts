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
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;
  @ViewChild("container") container: ElementRef;

  constructor(private fonticon: TNSFontIconService, private router: Router, private userService: UserService, private page: Page) {
    this.user = new User();
    this.user.emailAddress = "test12341234@yopmail.com"
    this.user.password = "password"
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this.userService.login(this.user)
    .then( result=> {
      this.router.navigate(["/dashboard"]);
    }).catch(error => {
      alert("Unfortunately we could not find your account.")
    });
  }

  signUp() {
    this.userService.register(this.user)
    .then(result => {
      alert("Account added successfully.");
    }).catch(error => {
      alert("There's problem with the account, contact admin.");
    });
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#bbbbbb"),
      duration: 200
    });
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }
  
}
