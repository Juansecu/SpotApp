import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NewReleasesDto } from 'src/app/artists/typings/NewReleasesDto';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  baseUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getArtists(searchTerm: string) {
    return this.getQuery(`search?q=${searchTerm}&type=artist`).pipe(
      map((response: any) => response.artists.items)
    );
  }

  getNewReleases(): Observable<NewReleasesDto> {
    return this.getQuery('browse/new-releases?limit=30').pipe<NewReleasesDto>(
      map((response: NewReleasesDto | any) => response.albums.items)
    );
  }

  getQuery(query: string): Observable<object> {
    const url = `${this.baseUrl}/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDws7StQn71O3wCs5K8DF6153G4uYAKqEYGl4rLTpDorAHsUm6uAj0O2-NkQwCB6Fviz82f2ECpGaWxI-A',
    });

    return this.http.get(url, { headers });
  }

  getTopTracks(artistId: string) {
    return this.getQuery(`artists/${artistId}/top-tracks?market=us`).pipe(
      map((response: any) => response.tracks)
    );
  }
}
