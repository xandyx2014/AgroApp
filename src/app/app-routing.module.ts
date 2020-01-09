import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./modules/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./modules/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'ganaderia',
    loadChildren: () => import('./modules/ganaderia/ganaderia.module').then( m => m.GanaderiaPageModule)
  },
  {
    path: 'agricultura',
    loadChildren: () => import('./modules/agricultura/agricultura.module').then( m => m.AgriculturaPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./modules/servicios/servicios.module').then( m => m.ServiciosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
