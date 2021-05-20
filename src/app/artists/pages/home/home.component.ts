import { Component, OnInit } from '@angular/core';

import { Item, NewReleasesDto } from '../../typings/NewReleasesDto';

import { SpotifyService } from './../../../domain/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading = false;
  errorMessage = '';
  newSongs: any[] = [];
  error = true;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.loading = true;
    this.error = false;
    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        this.newSongs = data;
        this.loading = false;
        console.log(data);
      },
      (error) => {
        console.log(error);
        this.error = true;
        this.loading = false;
        this.errorMessage = error.error.error.message;
      }
    );
  }
}
