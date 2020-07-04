import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JogosAmigosPage } from './jogos-amigos.page';

describe('JogosAmigosPage', () => {
  let component: JogosAmigosPage;
  let fixture: ComponentFixture<JogosAmigosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogosAmigosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JogosAmigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
