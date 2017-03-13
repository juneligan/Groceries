import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { UsersComponent } from "./pages/users/users.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  { path: "users", component: UsersComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  UsersComponent
];