import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { StreamsRoutingModule } from './streams-routing.module';
import { StreamsComponent } from './streams/streams.component';
import { NavbarComponent } from '../utils/navbar/navbar.component';

@NgModule({
  declarations: [StreamsComponent, NavbarComponent],
  imports: [
    CommonModule,
    StreamsRoutingModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class StreamsModule {}
