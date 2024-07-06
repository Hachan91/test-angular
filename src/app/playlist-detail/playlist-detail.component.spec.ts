import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistDetailComponent } from './playlist-detail.component';
import {DeezerServiceService} from "../deezer-service.service";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from "@angular/common";
import {DurationPipe} from "../duration.pipe";

describe('PlaylistDetailComponent', () => {
  let component: PlaylistDetailComponent;
  let fixture: ComponentFixture<PlaylistDetailComponent>;
  let deezerServiceSpy: jasmine.SpyObj<DeezerServiceService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('DeezerServiceService', ['getPlaylistDetails', 'getPlaylistTracks']);
    const route = { snapshot: { paramMap: { get: () => '1' } } };

    await TestBed.configureTestingModule({
      imports: [PlaylistDetailComponent,RouterTestingModule, CommonModule, DurationPipe],
      providers: [
        { provide: DeezerServiceService, useValue: spy },
        { provide: ActivatedRoute, useValue: route }
      ]
    }).compileComponents();

    deezerServiceSpy = TestBed.inject(DeezerServiceService) as jasmine.SpyObj<DeezerServiceService>;
    deezerServiceSpy.getPlaylistDetails.and.returnValue(of({ id: 1, title: 'Playlist 1', creator: { name: 'Author' }, duration: 3600, picture_medium: 'url' }));
    deezerServiceSpy.getPlaylistTracks.and.returnValue(of({ data: [{ id: 1, title: 'Track 1', artist: { name: 'Artist 1' }, duration: 300 }] }));

    fixture = TestBed.createComponent(PlaylistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
