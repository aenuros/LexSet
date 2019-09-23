import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

const TYPECHART_API = environment.apiUrl + '/dictionary/';

@Injectable()
export class DictionaryService {
  constructor(private http: Http) { }

  public getAllWords(): Observable<any> {
    // get the whole darn thing
    return this.http.get(TYPECHART_API)
      .pipe(map((response: Response) => response.json()));
  }

}
