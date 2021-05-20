import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [LoadingComponent, NavbarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [LoadingComponent, NavbarComponent],
})
export class SharedModule {}
