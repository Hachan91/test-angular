import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistComponent } from './playlist.component';
import {DeezerServiceService} from "../deezer-service.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;
  let service: DeezerServiceService;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistComponent, HttpClientTestingModule],
      providers: [DeezerServiceService]
    })
    .compileComponents();
    service = TestBed.inject(DeezerServiceService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
