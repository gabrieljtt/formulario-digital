import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dados-gerais',
  templateUrl: './dados-gerais.component.html',
  styleUrls: ['./dados-gerais.component.css']
})
export class DadosGeraisComponent implements OnInit {

  email: String
  nomeFantasia: String
  usuarioSistema: String
  labelExtra: String
  labelOperacao: String
  obsFormaPag: String

  pagDinheiro: false;
  pagPix: false;
  pagVale: false;
  pagCredito: false;
  pagDebito: false;

  validarEmail = new FormControl(null, Validators.email);

  operacoes: String[] = ['Sim. Ela Já Está em Funcionamento',
                      'Não. Ela Irá Abrir Dentro de 7 Dias',
                      'Não. Ela Irá Abrir Acima de 7 Dias'];

  extras: string[] = ['Sem Configurações Extras', 
                      'Ativar Apenas a Senha de Cancelamento', 
                      'Ativar Apenas o Motivo do Cancelamento', 
                      'Ativar Senha e Motivo do Cancelamento'];

  constructor() { }

  ngOnInit(): void {
  }

  validaPagamento(): boolean {
    if (this.pagDinheiro || this.pagPix || this.pagVale || this.pagCredito || this.pagDebito){
      return true;
    }
    return false;
  }

  validaCampos(): boolean {
      if(this.validarEmail.valid && this.nomeFantasia && this.usuarioSistema && this.labelExtra 
        && this.labelOperacao && this.validaPagamento() && this.obsFormaPag){
        return true;
      }
      return false;
  }

}
