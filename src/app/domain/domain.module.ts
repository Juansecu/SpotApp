import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NoImagePipe } from './pipes/no-image.pipe';
import { SecureDomPipe } from './pipes/secure-dom.pipe';

@NgModule({
  declarations: [NoImagePipe, SecureDomPipe],
  imports: [CommonModule, HttpClientModule],
  exports: [NoImagePipe, SecureDomPipe],
})
export class DomainModule {}
