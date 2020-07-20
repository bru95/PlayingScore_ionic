import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogosPageRoutingModule } from './jogos-routing.module';

import { JogosPage } from './jogos.page';
import { JogoCardComponentModule } from './../components/jogo-card/jogo-card.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		JogosPageRoutingModule,
		JogoCardComponentModule,
	],
	declarations: [
		JogosPage
	]
})
export class JogosPageModule {}
