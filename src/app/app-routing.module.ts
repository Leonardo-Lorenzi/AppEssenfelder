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
    path: 'register-user',
    loadChildren: () => import('./register-user/register-user.module').then( m => m.RegisterUserPageModule)
  },
  {
    path: 'register-card',
    loadChildren: () => import('./register-card/register-card.module').then( m => m.RegisterCardPageModule)
  },
  {
    path: 'register-address',
    loadChildren: () => import('./register-address/register-address.module').then( m => m.RegisterAddressPageModule)
  },
  {
    path: 'virtual-keyboard',
    loadChildren: () => import('./virtual-keyboard/virtual-keyboard.module').then( m => m.VirtualKeyboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
