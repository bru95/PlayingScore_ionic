import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JogosFavoritosPage } from './jogos-favoritos.page';

describe('JogosFavoritosPage', () => {
  let component: JogosFavoritosPage;
  let fixture: ComponentFixture<JogosFavoritosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogosFavoritosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JogosFavoritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
