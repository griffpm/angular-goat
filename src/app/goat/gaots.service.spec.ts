import { TestBed } from '@angular/core/testing';
import { GoatsService } from './goats.service';

describe('StudentsService', () => {
  let service: GoatsService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoatsService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});