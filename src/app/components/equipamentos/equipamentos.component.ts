import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.css']
})
export class EquipamentosComponent implements OnInit {

  quantComp: number
  quantImp: number
  modeloImpressora: String
  labelInternet: String

  win7: false;
  win8: false;
  win10: false;
  win11: false;
  outroSist: false;

  internet: String[] = ['Sim', 'Não'];

  constructor() { }

  ngOnInit(): void {
  }

  validaSistema(): boolean {
    if (this.win7 || this.win8 || this.win10 || this.win11 || this.outroSist){
      return true;
    }
    return false;
  }

  validaCampos(): boolean {
      if(this.quantComp >= 0 && this.quantImp >= 0 && this.modeloImpressora && this.labelInternet && this.validaSistema()) {
        return true;
      }
      return false;
  }

}
