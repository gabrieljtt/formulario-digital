import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  quantSabores: String
  labelCardapio: String
  labelPizza: String
  labelMeiaDS: String

  formData = new FormData();
  
  cardapio: String[] = ['Sim, Já Enviei', 'Não, Não Enviei'];

  pizzas: String[] = ['Não Trabalho Com Pizzas',
                      'Média Dos Sabores',
                      'Maior Valor Dos Sabores']

  meiaDS: String[] = ['Não Trabalho com Pizzas',
                      'Sim, É Possível',
                      'Não, Não É Possível']


  inputFileChange(event) {
    if(event.target.files && event.target.files[0]) {
      this.formData.append('file', event.target.files[0]);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    if(this.labelCardapio && this.labelPizza && this.labelMeiaDS && this.quantSabores) {
      return true;
    }
    return false;
}

}
