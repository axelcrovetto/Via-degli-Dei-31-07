import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../app/classes/Persona';
import { PersonaService } from '../app/services/persona.service';


@Component({
  selector: 'app-persone',

  templateUrl: 'persone.component.html',
  styleUrls: [
    'persone.component.css'
  ]
})

export class PersoneComponent implements OnInit {
  title = 'Persone'
  public persone: Persona[] = [];
  @Output('updatePersona') updatePersona = new EventEmitter<Persona>();


  constructor(private service: PersonaService) {


  }
  ngOnInit(): void {

    this.persone = this.service.getPersone();
  }
  onDeletePersona(persona: Persona) {
    this.service.deletePersona(persona);
  }
  onSelectPersona(persona: Persona) {
    const personaCopy = Object.assign({}, persona);
    this.updatePersona.emit(personaCopy);

  }
}