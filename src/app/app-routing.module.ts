import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarAccessGuard } from './radares/radar-access.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'radares',
    canActivate: [RadarAccessGuard],
    loadChildren: () => import('../app/radares/radares.module').then(m => m.RadaresModule)
  },
  {
    path: '',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
  },
  { path: '**', pathMatch:'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
