import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GanaderiaPage } from './ganaderia.page';

describe('GanaderiaPage', () => {
  let component: GanaderiaPage;
  let fixture: ComponentFixture<GanaderiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanaderiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GanaderiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
