import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { StreamsRoutingModule } from './streams-routing.module';
import { StreamsComponent } from './streams/streams.component';
import { NavbarComponent } from '../utils/navbar/navbar.component';

@NgModule({
  declarations: [StreamsComponent, NavbarComponent],
  imports: [CommonModule, StreamsRoutingModule, MaterialModule],
})
export class StreamsModule {}
