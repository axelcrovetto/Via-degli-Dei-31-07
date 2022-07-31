import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tappa } from '../classes/Tappa';
import { TappaService } from '../services/tappa.service';



@Component({
  selector: 'app-tappe',

  templateUrl: 'tappe.component.html',
  styleUrls: [
    'tappe.component.css'
  ]
})

export class TappeComponent implements OnInit {
  title = 'Tappe'
  public tappe: Tappa[] = [];
  @Output('updateTappa') updateTappa = new EventEmitter<Tappa>();


  constructor(private service: TappaService) {


  }
  ngOnInit(): void {

    this.tappe = this.service.getTappe();
  }
  onDeleteTappa(tappa: Tappa) {
    this.service.deleteTappa(tappa);
  }
  onSelectTappa(tappa: Tappa) {
    const tappaCopy = Object.assign({}, tappa);
    this.updateTappa.emit(tappaCopy);
  }
}