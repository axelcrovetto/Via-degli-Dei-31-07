import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Tappa} from "../classes/Tappa";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 @Output() onNewTappa = new EventEmitter<null>();
  constructor() { }

  ngOnInit(): void {
  }
  newUser(evt: MouseEvent) {
    evt.preventDefault();
    this.onNewTappa.emit();
  }
}