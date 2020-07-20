import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jogo-card',
  templateUrl: './jogo-card.component.html',
  styleUrls: ['./jogo-card.component.scss'],
})
export class JogoCardComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {}

}


