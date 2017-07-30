import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

/*
  Generated class for the ApiRestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiRestProvider {

  constructor(public http: Http) {
    console.log('Hello ApiRestProvider Provider');
  }

  getSubjects(): Observable<any[]> {
    return this.http.get("https://mujiklassrooms.firebaseio.com/subject.json")
    .map(
      data => {
        let items = [];
        let result = data.json();
        for(let item in result){
          items.push(result[item]);
        }
        return items;
      }
    );
  }

  addSubject(name: string, description: string) {
    let json = {
      "name": name,
      "description": description
    }

    return this.http.post("https://mujiklassrooms.firebaseio.com/subject.json", json);
  }

}
