import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deck } from './deck';
import { Observable } from 'rxjs';
 
@Injectable()
export class DeckService {
 
  private deckUrl: string;
 
  constructor(private http: HttpClient) {
    this.deckUrl = 'http://parking-space.info:8080/decklist/all';
  }
 
  public findAll(): Observable<Deck[]> {
    return this.http.get<Deck[]>(this.deckUrl);
  }
 
  public save(deck: Deck) {
    return this.http.post<Deck>(this.deckUrl, deck);
  }
}