import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './artists/pages/home/home.component';

import { ArtistComponent } from './artists/components/artist/artist.component';
import { SearcherComponent } from './artists/components/searcher/searcher.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'search', component: SearcherComponent },
	{ path: 'artist/:id', component: ArtistComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
