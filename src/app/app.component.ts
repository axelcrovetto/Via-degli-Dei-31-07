import { Component } from '@angular/core';
import { User } from './classes/User';
import { Tappa } from './classes/Tappa';
import { Persona } from './classes/Persona';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  userSelected: User = new User();

  tappaSelected: Tappa = new Tappa();

  personaSelected: Persona = new Persona();

  updateUser(user: User) {
    this.showForm = true;
    this.userSelected = user;
  }
  newUser() {
    this.userSelected = new User();
    this.showForm = true;

  }

  updateTappa(tappa: Tappa) {
    this.showForm = true;
    this.tappaSelected = tappa;
  }
  newTappa() {
    this.tappaSelected = new Tappa();
    this.showForm = true;

  }
  updatePersona(persona: Persona) {
    this.showForm = true;
    this.personaSelected = persona;
  }
  newPersona() {
    this.personaSelected = new Persona();
    this.showForm = true;

  }
}