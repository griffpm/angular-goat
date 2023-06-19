import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditGoatsComponent } from './edit-goats.component';

describe('EditGoatsComponent', () => {
  let component: EditGoatsComponent;
  let fixture: ComponentFixture<EditGoatsComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [EditGoatsComponent]
    }).compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(EditGoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
