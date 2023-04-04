import { async, ComponentFixture, TestBed } from  '@angular/core/testing';
import {HeaderStatsComponent} from './header-stats.component';
import {CardStatsComponent} from '../../cards/card-stats/card-stats.component';

describe('HeaderStatsComponent', () => {
  let component: HeaderStatsComponent;
  let fixture: ComponentFixture<HeaderStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderStatsComponent, CardStatsComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Create', () => {
    expect(component).toBeTruthy();
  });
});
