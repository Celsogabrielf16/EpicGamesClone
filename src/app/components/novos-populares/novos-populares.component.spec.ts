import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovosPopularesComponent } from './novos-populares.component';

describe('NovosPopularesComponent', () => {
  let component: NovosPopularesComponent;
  let fixture: ComponentFixture<NovosPopularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovosPopularesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovosPopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
