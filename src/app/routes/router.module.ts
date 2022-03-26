import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'images/page/:page',
    component: MainComponent,
  },
  {
    path: 'images/categories/:category/page/:page',
    component: MainComponent,
  },
  {
    path: 'images/:query/page/:page',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
