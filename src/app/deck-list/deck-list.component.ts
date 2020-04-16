import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck';
import { DeckService } from '../deck-service.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent implements OnInit {

  decks : Deck[];

  constructor(private deckService : DeckService) { }

  ngOnInit(): void {
    this.deckService.findAll().subscribe(data => {this.decks = data})
  }

}
