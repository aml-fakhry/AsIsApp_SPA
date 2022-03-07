import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { StreamsRoutingModule } from './streams-routing.module';
import { StreamsComponent } from './streams/streams.component';
import { NavbarComponent } from '../utils/navbar/navbar.component';
import { SidenavComponent } from '../utils/sidenav/sidenav.component';
import { TokensService } from 'src/app/services/tokens.service';

@NgModule({
  declarations: [StreamsComponent, NavbarComponent, SidenavComponent],
  imports: [CommonModule, StreamsRoutingModule, MaterialModule],
  providers: [TokensService],
})
export class StreamsModule {}
