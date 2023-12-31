import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListGoatComponent } from './list-goat.component';

describe('ListGoatComponent', () => {
  let component: ListGoatComponent;
  let fixture: ComponentFixture<ListGoatComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ListGoatComponent]
    })
    .compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(ListGoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
