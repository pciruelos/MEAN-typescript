import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoPreviewComponent } from './foto-preview.component';

describe('FotoPreviewComponent', () => {
  let component: FotoPreviewComponent;
  let fixture: ComponentFixture<FotoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
