import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirtualKeyboardPage } from './virtual-keyboard.page';

const routes: Routes = [
  {
    path: '',
    component: VirtualKeyboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualKeyboardPageRoutingModule {}
