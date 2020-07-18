import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JogoCardComponent } from './jogo-card.component';

describe('JogoCardComponent', () => {
  let component: JogoCardComponent;
  let fixture: ComponentFixture<JogoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JogoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
