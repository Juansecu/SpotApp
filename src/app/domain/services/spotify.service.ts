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
				'Bearer BQDl8eJA23mDv4PsGV9yfJcjALFdLR1AM6M9G9UJJlbPt-fYjtpFs8rEF4jgTnWqyg-oBAHYp4jlv0NoVJY',
		});

		return this.http.get(url, { headers });
	}

	getTopTracks(artistId: string) {
		return this.getQuery(`artists/${artistId}/top-tracks?market=us`).pipe(
			map((response: any) => response.tracks)
		);
	}
}
