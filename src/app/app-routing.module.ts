
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from './services/user.service';

import { TappaComponent } from './tappa/tappa.component';
import { TappeComponent } from './tappe/tappe.component';
import { PersonaComponent } from './persona/persona.component';
import { PersoneComponent } from './persone/persone.component';
const routes: Routes = [
  {
    path: 'users',
    pathMatch: 'full',
    component: UsersComponent

  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users/new',
    component: UserDetailComponent
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent
  },

  {
    path: 'tappe',
    pathMatch: 'full',
    component: TappeComponent

  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tappe'
  },
  /* {
    path: 'tappe/new',
    component: UserDetailComponent
  }, 
  {
    path: 'tappe/:id/edit',
    component: UserDetailComponent
  }*/
  {
    path: 'persone',
    pathMatch: 'full',
    component: PersoneComponent

  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'persone'
  },
  /* {
    path: 'tappe/new',
    component: UserDetailComponent
  }, 
  {
    path: 'tappe/:id/edit',
    component: UserDetailComponent
  }*/
];

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    TappaComponent,
    TappeComponent,
    PersonaComponent,
    PersoneComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    FontAwesomeModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }