import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TecladoVirtualPage } from './teclado-virtual.page';

describe('TecladoVirtualPage', () => {
  let component: TecladoVirtualPage;
  let fixture: ComponentFixture<TecladoVirtualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecladoVirtualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TecladoVirtualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
