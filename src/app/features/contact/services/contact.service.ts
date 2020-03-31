import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, timer } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';


@Injectable()
export class ContactService {
    constructor(
        private http: HttpClient
    ) { }

    loadStates(): Observable<any> {
        return this.http.get('https://apis.datos.gob.ar/georef/api/provincias');
    }

    loadDistrict(idSate: number): Observable<any> {
        return this.http.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${idSate}`);
    }
}


