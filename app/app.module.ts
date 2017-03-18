import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { UserService } from "./shared/service/user.service";
import { RoleService } from "./shared/service/role.service";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { UserDao } from "./shared/dao/user.dao";
import { ProductDao } from "./shared/dao/product.dao";
import { CategoryDao } from "./shared/dao/category.dao";
import { RoleDao } from "./shared/dao/role.dao";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    TNSFontIconModule.forRoot({
        'mdi': 'material-design-icons.css'
      })
    ],
  declarations: [
    AppComponent, 
  ...navigatableComponents
  ],
  providers: [UserDao, ProductDao, RoleDao, CategoryDao, UserService, RoleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
