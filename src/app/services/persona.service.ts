import { Injectable } from '@angular/core';
import { Persona } from '../classes/Persona';
import { PersonaInterface } from '../interfaces/persona';
import { TappaInterface } from '../interfaces/tappa';
import { Tappa } from '../classes/Tappa';
@Injectable({
  providedIn:'root'
})
export class PersonaService {
persone:Array<Persona>= [
  { id:1,
    name: 'Amarildo',
    credenziale:3.50,
    costoBologna:252/8,
    costoBrento:200/8,
    costoMadonna:176/8,
    costoMonte:376/8,
    costoSan:176/8,
    costoBivigliano:224/8,
    costoFirenze:232.65/6,
    pagato: 81/9+126/9+252/8+3.5,
  },
  {
    id:2,
    name: 'Elisabetta',
    credenziale:3.50,
    costoBologna:252/8,
    costoBrento:200/8,
    costoMadonna:176/8,
    costoMonte:376/8,
    costoSan:176/8,
    costoBivigliano:224/8,
    costoFirenze:232.65/6,
    pagato: 81/9+126/9+252/8+3.5,
  },
  {
    id:3,
  name: 'Virginia',
  credenziale:3.50,
  costoBologna:252/8,
  costoBrento:200/8,
  costoMadonna:176/8,
  costoMonte:376/8,
  costoSan:176/8,
  costoBivigliano:224/8,
  costoFirenze:232.65/6,
  pagato: 81/9+126/9+252/8+3.5,
  },
  {
    id:4,
  name: 'Federico',
  credenziale:3.50,
  costoBologna:252/8,
  costoBrento:200/8,
  costoMadonna:176/8,
  costoMonte:376/8,
  costoSan:176/8,
  costoBivigliano:224/8,
  costoFirenze:232.65/6,
  pagato: 81/9+126/9+252/8+3.5,
  },
  {
    id:5,
  name: 'Gabriele',
  credenziale:3.50,
  costoBologna:252/8,
  costoBrento:200/8,
  costoMadonna:176/8,
  costoMonte:376/8,
  costoSan:176/8,
  costoBivigliano:224/8,
  costoFirenze:232.65/6,
  pagato: 81/9+126/9+252/8+3.5,
  },
  {
    id:6,
  name: 'Sara',
  credenziale:3.50,
  costoBologna:252/8,
  costoBrento:200/8,
  costoMadonna:176/8,
  costoMonte:376/8,
  costoSan:176/8,
  costoBivigliano:224/8,
  costoFirenze:0,
  pagato: 81/9+126/9+252/8+3.5+20,
  },
  {
    id:7,
  name: 'Alex',
  credenziale:3.50,
  costoBologna:252/8,
  costoBrento:200/8,
  costoMadonna:176/8,
  costoMonte:376/8,
  costoSan:176/8,
  costoBivigliano:224/8,
  costoFirenze:0,
  pagato: 81/9+126/9+252/8+3.5+20,
  },
  {
    id:8,
  name: 'Axel',
  credenziale:3.50,
  costoBologna:252/8,
  costoBrento:200/8,
  costoMadonna:176/8,
  costoMonte:376/8,
  costoSan:176/8,
  costoBivigliano:224/8,
  costoFirenze:232.65/6,
  pagato: 81/9+126/9+252/8+3.5,
  },
]

  getPersone() {

    return this.persone;
  }
  deletePersona(persona: Persona) {

    const index = this.persone.indexOf(persona);
    if (index > -1) {
      this.persone.splice(index, 1);
    }
  }
  updatePersone(persona: PersonaInterface) {
    const idx = this.persone.findIndex(v => v.id === persona.id);

    if (idx !== -1) {
      this.persone[idx] = { ...persona };
    }
  }
  createPersone(persona: PersonaInterface) {

    this.persone.splice(0, 0, { ...persona });

  }
  getPersona(id:number):Persona{
    return this.persone[id];
  }
}