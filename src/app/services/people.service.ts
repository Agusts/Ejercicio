
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable()
export class PeopleService {

    constructor(private http: HttpClient) {


}

    getPeople() {

       return this.http.get('https://swapi.co/api/people/');

    }


}
