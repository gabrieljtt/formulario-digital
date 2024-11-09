import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { DadosGeraisComponent } from './components/dados-gerais/dados-gerais.component';
import { EquipamentosComponent } from './components/equipamentos/equipamentos.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { PresencialComponent } from './components/presencial/presencial.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { FiscalComponent } from './components/fiscal/fiscal.component';
import { IntegracoesComponent } from './components/integracoes/integracoes.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'dados-gerais', component: DadosGeraisComponent},
      {path: 'equipamentos', component: EquipamentosComponent},
      {path: 'cardapio', component: CardapioComponent},
      {path: 'presencial', component: PresencialComponent},
      {path: 'delivery', component: DeliveryComponent},
      {path: 'fiscal', component: FiscalComponent},
      {path: 'integracoes', component: IntegracoesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
