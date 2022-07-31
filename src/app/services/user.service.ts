import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';

@Injectable({
  providedIn:'root'
})
export class UserService {
users:Array<User>= [
  { id:1,
  name:'Hidran1',
  lastname: 'Arias1',
  email:'hidran@gmail.com',
  fiscalcode:'N34EP132LJKB3LJK123B',
  phone:'12323213',
  province: 'Torino',
  age: 43
  },
  {id:2,
  name:'Predator',
  lastname: 'Supremo',
  email:'predator@gmail.com',
  fiscalcode:'SPMPRDTR98H01Z111M',
  province: 'Vizzolo Predabissi',
  phone:'69',
  age: 24
  },
  {id:3,
  name:'Hidran3',
  lastname: 'Arias3',
  email:'hidran@gmail.com',
  fiscalcode:'N34EP132LJKB3LJK123B',
  phone:'12323213',
  province: 'Torino',
  age: 43
  },
  { id:4,
  name:'Hidran4',
  lastname: 'Arias4',
  email:'hidran@gmail.com',
  fiscalcode:'N34EP132LJKB3LJK123B',
  phone:'12323213',
  province: 'Torino',
  age: 43
  },
]

  getUsers() {

    return this.users;
  }
  deleteUser(user: User) {

    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
  updateUser(user: UserInterface) {
    const idx = this.users.findIndex(v => v.id === user.id);

    if (idx !== -1) {
      this.users[idx] = { ...user };
    }
  }
  createUser(user: UserInterface) {

    this.users.splice(0, 0, { ...user });

  }
  getUser(id:number):User{
    return this.users[id];
  }
}