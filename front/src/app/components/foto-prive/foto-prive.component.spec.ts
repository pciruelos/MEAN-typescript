import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoPriveComponent } from './foto-prive.component';

describe('FotoPriveComponent', () => {
  let component: FotoPriveComponent;
  let fixture: ComponentFixture<FotoPriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoPriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoPriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
