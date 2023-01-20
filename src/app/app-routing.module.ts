import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './principal/login/login.component';
import { HomeComponent } from './principal/home/home.component';
import { CanactivateGuard } from './canactivate.guard';

const routes: Routes = [
  { path: "home", component: HomeComponent, canActivate: [CanactivateGuard] },
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
