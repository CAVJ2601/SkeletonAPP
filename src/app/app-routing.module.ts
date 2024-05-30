import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'plan-uni',
    loadChildren: () => import('./pages/plan-uni/plan-uni.module').then( m => m.PlanUniPageModule)
  },
  {
    path: 'plan-clase',
    loadChildren: () => import('./pages/plan-clase/plan-clase.module').then( m => m.PlanClasePageModule)
  },
  {
    path: 'listado-plan',
    loadChildren: () => import('./pages/listado-plan/listado-plan.module').then( m => m.ListadoPlanPageModule)
  },
  {
    path: 'rev-calen',
    loadChildren: () => import('./pages/rev-calen/rev-calen.module').then( m => m.RevCalenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
