import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TappaService } from '../services/tappa.service';
import { Tappa } from '../classes/Tappa';

import { faPencilAlt, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'tr[app-tappa]',
  templateUrl: './tappa.component.html'

  //inputs: ['user:user-data']
})
export class TappaComponent implements OnInit {

  @Input('tappa-data') tappa: Tappa = new Tappa();
  @Output('onDeleteTappa') tappaDeleted = new EventEmitter();
  @Output('onSelectTappa') onSelectTappa = new EventEmitter();

  faPen = faPencilAlt;
  faTrash = faTrash;
  faInfo = faInfo;

  constructor(private tappaService: TappaService, private router: Router) {

  }

  ngOnInit() {
  }
  deleteTappa() {

    this.tappaDeleted.emit(this.tappa);


  }
  showTappaDetail() {
    this.router.navigateByUrl('/tappe/' + this.tappa?.id);
  }
  updateTappa() {
    // this.route.navigateByUrl('/users/' + this.user?.id + '/edit');
    //this.route.navigate(['users', this.user?.id, 'edit']);
    //this.onSelectUser.emit(this.user);

  }

}