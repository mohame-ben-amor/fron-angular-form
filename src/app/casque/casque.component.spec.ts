import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasqueComponent } from './casque.component';

describe('CasqueComponent', () => {
  let component: CasqueComponent;
  let fixture: ComponentFixture<CasqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
