import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Albums, Artist } from '../../typings/NewReleasesDto';

import { SpotifyService } from 'src/app/domain/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  artist!: any;
  loading!: boolean;

  topTracks: any[] = [];

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.loading = true;
    this.router.params.subscribe((params) => {
      console.log(params['id']);
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit(): void {}

  getArtist(id: string): void {
    this.spotifyService.getArtist(id).subscribe((artist: any) => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks(artistId: string): void {
    this.spotifyService.getTopTracks(artistId).subscribe((topTracks) => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
