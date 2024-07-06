import { Component } from '@angular/core';
import {DeezerServiceService} from "../deezer-service.service";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {
  playlists: any[] = [];
  constructor(private deezerService: DeezerServiceService, private router: Router) { }

  ngOnInit(): void {
    this.deezerService.getUserPlaylists(5).subscribe((data: any) => {
      this.playlists = data.data;
    });
  }
  openPlaylist(playlistId: number): void {
    this.router.navigate(['/playlist', playlistId]);
  }
}
