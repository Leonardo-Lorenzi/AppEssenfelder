import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-user',
    loadChildren: () => import('./cadastro-user/cadastro-user.module').then( m => m.CadastroUserPageModule)
  },
  {
    path: 'cadastro-card',
    loadChildren: () => import('./cadastro-card/cadastro-card.module').then( m => m.CadastroCardPageModule)
  },
  {
    path: 'cadastro-adress',
    loadChildren: () => import('./cadastro-adress/cadastro-adress.module').then( m => m.CadastroAdressPageModule)
  },
  {
    path: 'teclado-virtual',
    loadChildren: () => import('./teclado-virtual/teclado-virtual.module').then( m => m.TecladoVirtualPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
