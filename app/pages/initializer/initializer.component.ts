import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from "../../shared/domain/user";
import { UserService } from "../../shared/service/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';

@Component({
  providers: [UserService]
})

export class InitializerComponent implements OnInit {

  isLoaded = false;

  constructor(private router: Router, private userService: UserService, private page: Page) {
  }

  ngOnInit() {
    console.log("---------------->initialization");
    // this.router.navigate(["/login"]);
  }
}
