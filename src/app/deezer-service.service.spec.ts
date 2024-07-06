import { TestBed } from '@angular/core/testing';

import { DeezerServiceService } from './deezer-service.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('DeezerServiceService', () => {
  let service: DeezerServiceService;
  let httpMock: HttpTestingController;
  const apiUrl = 'https://api.deezer.com';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeezerServiceService]
    });
    service = TestBed.inject(DeezerServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });



  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch playlist details', () => {
    const mockDetails = { id: 1, title: 'Playlist 1' };
    service.getPlaylistDetails(1).subscribe(details => {
      expect(details.title).toBe('Playlist 1');
    });

    const req = httpMock.expectOne(`${apiUrl}/playlist/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockDetails);
  });
});
