import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Body } from '../models/body.interface';

@Injectable({
  providedIn: 'root'
})
export class BodiesService {

  constructor(private http: HttpClient) { }

  getAllBodies(): Observable<any[]>{
    return this.http.get<any[]>('https://api.le-systeme-solaire.net/rest.php/bodies?data=id%2CenglishName%2CdiscoveredBy%2CdiscoveryDate%2CisPlanet%2Cgravity%2CalternativeName&filter%5B%5D=&filter%5B%5D=');
  }

  getBodyById(id: string): Observable<any>{
    return this.http.get<any>('https://api.le-systeme-solaire.net/rest/bodies/'+ id +'?data=id%2CenglishName%2CdiscoveredBy%2CdiscoveryDate%2CisPlanet%2Cgravity%2CalternativeName&filter%5B%5D=&filter%5B%5D=')
  }

  
}
