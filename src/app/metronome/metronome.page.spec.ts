import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetronomePage } from './metronome.page';

describe('MetronomePage', () => {
  let component: MetronomePage;
  let fixture: ComponentFixture<MetronomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetronomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetronomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
