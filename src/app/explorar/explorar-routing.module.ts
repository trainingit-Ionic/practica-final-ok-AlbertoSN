import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplorarPage } from './explorar.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorarPage
  },
  { path: 'peliculas', loadChildren: './pages/explorar/peliculas.page' },
  { path: 'musica', loadChildren: './pages/explorar/musica/musica.page' },
  { path: 'libros', loadChildren: './pages/explorar/libros/libros.page' }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorarPageRoutingModule {}
