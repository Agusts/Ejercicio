import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {

  people: any[] = [];
  pers: any[] = [];

  constructor(private _PeopleServices: PeopleService) {
    this._PeopleServices.getPeople()
    .subscribe((res: any) => {
      this.people = res.results;
     });
  }


  buscarPeoples(termino: string) {

    // tslint:disable-next-line:prefer-const
    let pers: any[] = [];

    termino = termino.toLowerCase();
    console.log(termino);

    for ( let i = 0; i < this.people.length; i ++ ) {
      // tslint:disable-next-line:prefer-const
      let peop = this.people [i];

      // tslint:disable-next-line:prefer-const
      let nombre = peop.name.toLowerCase();


      if ( nombre.indexOf( termino ) >= 0  ) {
        peop.idx = i;
        pers.push( peop );
        console.log(pers);
      }
      console.log(pers);
  this.pers = pers;
  }
    }

}
