import { PersonaInterface } from './../interfaces/persona';
export class Persona implements PersonaInterface {
  id:number;
  name: string;
  credenziale:number;
  costoBologna:number;
  costoBrento:number;
  costoMadonna:number;
  costoMonte:number;
  costoSan:number;
  costoBivigliano:number;
  costoFirenze:number;
  pagato:number;
  constructor() {
    this.name = '';
    this.credenziale =0;
    this.costoBologna=0;
    this.costoBrento=0;
    this.costoMadonna=0;
    this.costoMonte=0;
    this.costoSan=0;
    this.costoBivigliano=0;
    this.costoFirenze=0;
    this.pagato=0;
  }
}