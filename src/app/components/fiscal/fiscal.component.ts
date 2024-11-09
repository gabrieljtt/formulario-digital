import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiscal',
  templateUrl: './fiscal.component.html',
  styleUrls: ['./fiscal.component.css']
})
export class FiscalComponent implements OnInit {

  infoFiscal: String
  emailXml: String
  labelMeioFiscal: String
  labelEmissao: String
  labelRegime: String
  labelAmbiente: String

  formData = new FormData();

  meioFiscal: String[] = ['Não Irei Emitir Cupom',
                          'Certificado Digital A1',
                          'SAT',
                          'MFE']

  emissao: String[] = ['Não Irei Emitir Cupom',
                       'Manual',
                       'Automática']

  regimeTributario: String[] = ['Não Irei Emitir Cupom',
                                'Simples Nacional',
                                'Lucro Presumido']
  
  ambiente: String[] = ['Não Irei Emitir Cupom',
                        'Produção',
                        'Homologação']

  inputFileChange(event) {
    if(event.target.files && event.target.files[0]) {
      this.formData.append('file', event.target.files[0]);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    if (this.labelMeioFiscal && this.labelEmissao && this.labelRegime && this.labelAmbiente && this.infoFiscal){
      return true;
    }
    return false;
  }

}
