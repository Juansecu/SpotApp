import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { SpotifyService } from './domain/services/spotify.service';

import { ArtistsModule } from './artists/artists.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ArtistsModule, SharedModule],
  providers: [SpotifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
