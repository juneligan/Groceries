import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { UsersComponent } from "./pages/users/users.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "list", component: ListComponent },
  { path: "users", component: UsersComponent }
];

export const navigatableComponents = [
  LoginComponent,
  DashboardComponent,
  ListComponent,
  UsersComponent
];