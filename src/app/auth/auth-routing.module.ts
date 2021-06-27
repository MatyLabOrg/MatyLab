import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RecoveryComponent } from './recovery/recovery.component';

const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'logout', component:LogoutComponent},
  { path:'recovery', component:RecoveryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
