import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../typings/NewReleasesDto';

@Component({
	selector: 'app-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
	@Input() albums: Item[] = [];

	constructor(private router: Router) {}

	ngOnInit(): void {}

	displayArtist(item: Item) {
		let artistId;

		if (item.type === 'artist') {
			artistId = item.id;
		} else {
			artistId = item.artists[0].id;
		}

		this.router.navigate(['/artist', artistId]);
	}
}
