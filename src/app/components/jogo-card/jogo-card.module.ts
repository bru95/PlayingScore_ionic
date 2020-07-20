import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogoCardComponent } from './jogo-card.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [JogoCardComponent],
  exports: [JogoCardComponent]
})
export class JogoCardComponentModule {}

