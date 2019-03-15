import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getHeroes(){
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?apikey=28277d83304d1f8731b4583a8f21107b&limit=100&offset=0')
  }
}
