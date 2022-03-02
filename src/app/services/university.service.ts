import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  url: string = "http://universities.hipolabs.com";

  constructor(private HttpClient: HttpClient) { }

  buscarUniversidad(word: string){
    return this.HttpClient.get(this.url+'/search?country='+word);
  }

}
