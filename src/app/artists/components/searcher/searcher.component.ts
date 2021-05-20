import { Component, OnInit } from '@angular/core';

import { Artist } from '../../typings/NewReleasesDto';

import { SpotifyService } from 'src/app/domain/services/spotify.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit {
  artists: any[] = [];
  loading: boolean = false;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  search(searchTerm: string) {
    console.log(searchTerm);
    this.loading = true;
    this.spotifyService.getArtists(searchTerm).subscribe((data: Artist[]) => {
      console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }
}
