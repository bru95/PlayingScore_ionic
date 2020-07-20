import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
      { path: 'tabJogos', loadChildren: () => import('./jogos/jogos.module').then(m => m.JogosPageModule) },
    ]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'jogos',
    loadChildren: () => import('./jogos/jogos.module').then( m => m.JogosPageModule)
  },
  {
    path: 'partidas',
    loadChildren: () => import('./partidas/partidas.module').then( m => m.PartidasPageModule)
  },
  {
    path: 'marcador',
    loadChildren: () => import('./marcador/marcador.module').then( m => m.MarcadorPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
