import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [{
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
      },
      {
        path: 'souvenir',
        loadChildren: () => import('./pages/souvenir/souvenir.module').then( m => m.SouvenirPageModule)
      },{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }]
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
