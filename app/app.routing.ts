import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { UsersComponent } from "./pages/users/users.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { InitializerComponent } from "./pages/initializer/initializer.component";

export const routes = [
  // { path: "", component: InitializerComponent},
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "list", component: ListComponent },
  { path: "users", component: UsersComponent }
];

export const navigatableComponents = [
  // InitializerComponent,
  LoginComponent,
  DashboardComponent,
  ListComponent,
  UsersComponent
];