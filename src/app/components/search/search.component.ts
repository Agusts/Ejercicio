import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  people: any[] = [];

  constructor(private _TableComponent: TableComponent) {

  }

  ngOnInit() {


      this.people = this._TableComponent.people;
      console.log(this.people);



  }

}
