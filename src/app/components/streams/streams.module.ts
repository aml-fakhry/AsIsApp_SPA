import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StreamsRoutingModule } from './streams-routing.module';
import { StreamsComponent } from './streams/streams.component';
import { NavbarComponent } from '../utils/navbar/navbar.component';
import { SidenavComponent } from '../utils/sidenav/sidenav.component';
import { TokensService } from 'src/app/services/tokens.service';
import { PostComponent } from '../post/post.component';
import { PostsComponent } from '../posts/posts.component';

@NgModule({
  declarations: [
    StreamsComponent,
    NavbarComponent,
    SidenavComponent,
    PostComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    StreamsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TokensService],
})
export class StreamsModule {}
