import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  horariosDelivery: String
  quantEntregador: number
  valorEntregador: number
  obsAdicional: String
  valorSite: number
  dominioSite: String
  labelEntregas: String
  labelPagEntregas: String
  labelCep: String
  labelAreas: String
  labelFuncSite: String
  labelAgend: String

  semDelivery: false;
  semSite: false;
  diaSeg: false;
  diaTer: false;
  diaQua: false;
  diaQui: false;
  diaSex: false;
  diaSab: false;
  diaDom: false;

  entregas: String[] = ['Utilizo Entregador Próprio', 'Utilizo Entregador Terceirizado']

  pagEntregas: String[] = ['Não Possuo Entregador Próprio',
                          'Somente Diária',
                          'Somente Taxa',
                          'Diária + Taxa']

  cep: String[] = ['Sim, É Único', 'Não, Não É Único']

  areas: String[] = ['Atendo Por Bairros', 'Atendo Por Raios (KM)']

  funcSite: String[] = ['Somente Retirada',
                        'Somente Entrega',
                        'Entrega E Retirada']

  agendamento: String[] = ['Não Ativar Agendamento',
                           'Ativar Para Agendar Até 1 Dia Antes',
                           'Ativar Para Agendar Até 2 Dias Antes',
                           'Ativar Para Agendar Até 3 Dias Antes',
                           'Ativar Para Agendar Até 4 Dias Antes',
                           'Ativar Para Agendar Até 5 Dias Antes']

  constructor() { }

  ngOnInit(): void {
  }

  validaDiasSemana(): boolean {
    if (this.diaSeg || this.diaTer|| this.diaQua || 
      this.diaQui || this.diaSex || this.diaSab || this.diaDom){
      return true;
    }
    return false;
  }

  validaSiteDelivery(): boolean {
    if (this.valorSite >= 0 && this.labelFuncSite && this.labelAgend && 
      this.dominioSite || this.semSite) {
      return true
    }
    return false
  }

  validaCampos(): boolean {
      if(this.validaDiasSemana() && this.validaSiteDelivery() && this.horariosDelivery && this.labelEntregas &&
         this.quantEntregador >= 0 && this.labelPagEntregas && this.valorEntregador >=0 &&
         this.labelCep && this.labelAreas && this.obsAdicional || this.semDelivery) {
          return true
        }
        
      return false;
  }

}
