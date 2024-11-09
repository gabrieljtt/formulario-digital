import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-integracoes',
  templateUrl: './integracoes.component.html',
  styleUrls: ['./integracoes.component.css']
})
export class IntegracoesComponent implements OnInit {

  infoLogin: String
  labelIntegracaoMoto: String

  integracaoMoto: String [] = [ 'Não Irei Usar',
                                'Entrega Fácil',
                                'SODE',
                                'Pick N Go',
                                'Foody',
                                'Husky',
                                'Mottu',
                                'GFRTEC']

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogElement);
  }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
      if (this.labelIntegracaoMoto && this.infoLogin) {
        return true
      }
    return false;
  }

}

@Component({
  selector: 'dialog-element',
  templateUrl: './dialog-element.html',
})
export class DialogElement { }

