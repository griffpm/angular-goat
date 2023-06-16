import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGoatComponent } from './detail-goat.component';

describe('DetailGoatComponent', () => {
  let component: DetailGoatComponent;
  let fixture: ComponentFixture<DetailGoatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailGoatComponent]
    });
    fixture = TestBed.createComponent(DetailGoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
