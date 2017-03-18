import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from "../../shared/domain/user";
import { UserService } from "../../shared/service/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";

  import observable = require("data/observable");
import pages = require("ui/page");
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

  pageLoaded(args: observable.EventData) {
    // var page = <pages.Page>args.object;
    // var viewModel = new observable.Observable();
    // var glyphs = new Array<observable.Observable>();
    // var charCode = 0xe903;
    // for(; charCode <= 0xeaea; charCode++){
    //     var glyph = new observable.Observable();
    //     glyph.set("icon", String.fromCharCode(charCode));
    //     glyph.set("code", charCode.toString(16));
    //     glyphs.push(glyph);
    // }
    // viewModel.set("glyphs", glyphs)
    // page.bindingContext = viewModel;
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
