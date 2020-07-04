import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcadorPage } from './marcador.page';

describe('MarcadorPage', () => {
  let component: MarcadorPage;
  let fixture: ComponentFixture<MarcadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
