import { TappaInterface } from './../interfaces/tappa';
export class Tappa implements TappaInterface {
  id: number;
  name: string;
  costo:number;
  costoATesta:number;
  caparra:string;
  data:Date;
  note:string;
  pagamento:string;
  modalitaPagamento:string;
  distanza:number;
  constructor() {
    this.id = 0;
    this.name = '';
    this.costo = 0;
    this.costoATesta = 0;
    this.caparra = '';
    this.data=null;
    this.note='-';
    this.pagamento='';
    this.modalitaPagamento='';
    this.distanza=0;
  }
}