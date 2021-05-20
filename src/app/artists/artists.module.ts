import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import { DomainModule } from './../domain/domain.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';

import { ArtistComponent } from './components/artist/artist.component';
import { CardsComponent } from './components/cards/cards.component';
import { ErrorComponent } from './components/error/error.component';
import { SearcherComponent } from './components/searcher/searcher.component';

@NgModule({
  declarations: [
    ArtistComponent,
    ErrorComponent,
    HomeComponent,
    SearcherComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    DomainModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HomeComponent, HttpClientModule],
})
export class ArtistsModule {}
