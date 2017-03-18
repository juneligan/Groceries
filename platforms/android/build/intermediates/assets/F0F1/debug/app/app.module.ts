import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { UserDao } from "./shared/dao/user.dao";
import { ProductDao } from "./shared/dao/product.dao";
import { CategoryDao } from "./shared/dao/category.dao";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
    ],
  declarations: [
    AppComponent, 
  ...navigatableComponents
  ],
  providers: [UserDao, ProductDao, CategoryDao],
  bootstrap: [AppComponent]
})
export class AppModule {}
