import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DeezerServiceService} from "../deezer-service.service";
import {CommonModule} from "@angular/common";
import {DurationPipe} from "../duration.pipe";

@Component({
  selector: 'app-playlist-detail',
  standalone: true,
  imports: [CommonModule, DurationPipe],
  templateUrl: './playlist-detail.component.html',
  styleUrl: './playlist-detail.component.css'
})
export class PlaylistDetailComponent {
  playlist: any;
  tracks: any[] = [];
  playlistId: number;
  loading = false;

  constructor(private route: ActivatedRoute, private deezerService: DeezerServiceService) {
    this.playlistId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.deezerService.getPlaylistDetails(this.playlistId).subscribe((data: any) => {
      this.playlist = data;
    });
    this.loadMoreTracks();
  }

  loadMoreTracks(): void {
    if (this.loading) return;
    this.loading = true;
    this.deezerService.getPlaylistTracks(this.playlistId, this.tracks.length).subscribe((data: any) => {
      this.tracks = [...this.tracks, ...data.data];
      this.loading = false;
    });
  }

  onScroll(): void {
    // Add scroll event listener to load more tracks
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.loadMoreTracks();
    }
  }
}
