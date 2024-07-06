import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeezerServiceService {
  private apiUrl = 'https://api.deezer.com'
  constructor(private http: HttpClient) { }
  getUserPlaylists(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}/playlists`);
  }
  getPlaylistDetails(playlistId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/playlist/${playlistId}`);
  }
  getPlaylistTracks(playlistId: number, index: number = 0, limit: number = 25): Observable<any> {
    return this.http.get(`${this.apiUrl}/playlist/${playlistId}/tracks?index=${index}&limit=${limit}`);
  }
}
