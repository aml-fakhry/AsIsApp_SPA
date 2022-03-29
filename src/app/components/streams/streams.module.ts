import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StreamsRoutingModule } from './streams-routing.module';
import { StreamsComponent } from './streams/streams.component';
import { NavbarComponent } from '../utils/navbar/navbar.component';
import { SidenavComponent } from '../utils/sidenav/sidenav.component';
import { TokensService } from 'src/app/services/tokens.service';
import { PostComponent } from '../post/post.component';
import { PostsComponent } from '../posts/posts.component';
import { PostService } from 'src/app/services/post.service';
import { TokenInterceptor } from 'src/app/services/token-interceptor';
import { SocketService } from 'src/app/services/socket.service';

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
  providers: [
    TokensService,
    PostService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    SocketService,
  ],
})
export class StreamsModule {}
