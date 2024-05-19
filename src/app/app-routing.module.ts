import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contenido/:id',
    component: ContenidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
