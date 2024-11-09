import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presencial',
  templateUrl: './presencial.component.html',
  styleUrls: ['./presencial.component.css']
})
export class PresencialComponent implements OnInit {

  horariosPresencial: String
  quantGarcom: number
  quantMesas: number
  obsAdicional: String
  labelTaxa: String
  labelCardDigital: String
  labelPagGarcom: String
  valorGarcom: number

  semPresencial: false;
  diaSeg: false;
  diaTer: false;
  diaQua: false;
  diaQui: false;
  diaSex: false;
  diaSab: false;
  diaDom: false;

  taxa: String[] = ['Não Trabalho Com Taxa De Serviço',
                    'Divido Conforme Atendimento',
                    'Divido Entre Todos Garçons']

  cardDigital: String[] = ['Não Vou Utilizar Cardápio Digital',
                          'Cardápio Digital Basic',
                          'Cardápio Digital Premium']

  pagGarcom: String[] = ['Não Possuo Garçom',
                        'Recebem Por Diária',
                        'Recebem Semanalmente',
                        'Recebem Mensalmente']

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

  validaCampos(): boolean {
      if(this.quantGarcom >= 0 && this.quantMesas >=0 && this.horariosPresencial && this.labelTaxa
         && this.labelCardDigital && this.labelPagGarcom && this.valorGarcom >= 0 
         && this.obsAdicional && this.validaDiasSemana() || this.semPresencial) {
          return true;
      }
      return false;
  }

}
