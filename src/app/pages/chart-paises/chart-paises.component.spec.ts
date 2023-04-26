import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPaisesComponent } from './chart-paises.component';

describe('ChartPaisesComponent', () => {
  let component: ChartPaisesComponent;
  let fixture: ComponentFixture<ChartPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPaisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
