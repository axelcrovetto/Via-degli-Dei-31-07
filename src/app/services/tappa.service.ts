import { Injectable } from '@angular/core';
import { Tappa } from '../classes/Tappa';
import { TappaInterface } from '../interfaces/tappa';

@Injectable({
  providedIn:'root'
})
export class TappaService {
tappe:Array<Tappa>= [
  { id:1,
    name: 'Bologna',
    costo:252.00,
    costoATesta:252/8,
    caparra:'Nessuna',
    data:new Date("2022-8-6"),
    note: '-',
    pagamento: "Bonifico",
    modalitaPagamento: 'Conto unico',
    distanza: 0,
    },
  { id:2,
  name: 'Monte Adone',
  costo:200,
  costoATesta: 200/8,
  caparra:'Nessuna',
  data:new Date("2022-8-7"),
  note: '-',
  pagamento: "Bonifico, contanti, Sum up",
  modalitaPagamento: 'Conto separato',
  distanza: 28
  },
  { id:3,
  name: 'Madonna dei Fornelli',
  costo:176.00,
  costoATesta:176/8,
  caparra:'Nessuna',
  data:new Date("2022-8-8"),
  note: '-',
  pagamento: "BOH",
  modalitaPagamento: 'BOH',
  distanza: 24
  },
  { id:4,
  name: 'Monte di Fò',
  costo:376.00,
  costoATesta:376/8,
  caparra:'€81.00',
  data:new Date("2022-8-9"),
  note: 'Pagato. Chiedere se ci ha prenotato la cena',
  pagamento: "Bonifico, contanti",
  modalitaPagamento: 'Conto unico e separato',
  distanza: 24.5
  },
  { id:5,
  name: 'San Piero a Sieve',
  costo:176.00,
  costoATesta:176/8,
  caparra:'€40.00',
  data:new Date("2022-8-10"),
  note: 'Pagati da Sara & Alex',
  pagamento: "Solo contanti, Satispay",
  modalitaPagamento: 'Conto separato',
  distanza: 23
  },
  { id:6,
  name: 'Bivigliano',
  costo:224.00,
  costoATesta:224/8,
  caparra:'€126.00',
  data:new Date("2022-8-11"),
  note: 'Caparra per 9 persone, €14 ciascuno. Verificare il resto',
  pagamento: "Bonifico, contatti",
  modalitaPagamento: 'Conto unico e separato',
  distanza: 18
  },
  { id:7,
  name: 'Firenze',
  costo:232.65,
  costoATesta:232.65/6,
  caparra:'Nessuna',
  data:new Date("2022-8-12"),
  note: '-',
  pagamento: "Chiedere ad Amarildo",
  modalitaPagamento: 'Chiedere ad Amarildo',
  distanza:17.5
  },
]

  getTappe() {

    return this.tappe;
  }
  deleteTappa(tappa: Tappa) {

    const index = this.tappe.indexOf(tappa);
    if (index > -1) {
      this.tappe.splice(index, 1);
    }
  }
  updateTappe(tappa: TappaInterface) {
    const idx = this.tappe.findIndex(v => v.id === tappa.id);

    if (idx !== -1) {
      this.tappe[idx] = { ...tappa };
    }
  }
  createTappe(tappa: TappaInterface) {

    this.tappe.splice(0, 0, { ...tappa });

  }
  getTappa(id:number):Tappa{
    return this.tappe[id];
  }
}