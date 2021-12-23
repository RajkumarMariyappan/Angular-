import { TestBed } from '@angular/core/testing';

import { PostchangeService } from './postchange.service';

describe('PostchangeService', () => {
  let service: PostchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
