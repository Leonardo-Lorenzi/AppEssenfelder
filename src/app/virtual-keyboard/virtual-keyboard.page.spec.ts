import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VirtualKeyboardPage } from './virtual-keyboard.page';

describe('VirtualKeyboardPage', () => {
  let component: VirtualKeyboardPage;
  let fixture: ComponentFixture<VirtualKeyboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualKeyboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VirtualKeyboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
