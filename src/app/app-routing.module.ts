import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContatosComponent } from './contatos/contatos.component';

const routes: Routes = [
  {path: '', component:MenuComponent},
  {path: 'contato', component:ContatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
