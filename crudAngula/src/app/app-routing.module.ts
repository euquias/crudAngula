import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo:'produto'
  },
  {
    path:'produto',
    loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule)

    /* loadChildren: './produtos/produtos.module#ProdutoModulo' */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
