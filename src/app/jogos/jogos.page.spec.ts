import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JogosPage } from './jogos.page';

describe('JogosPage', () => {
  let component: JogosPage;
  let fixture: ComponentFixture<JogosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JogosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
