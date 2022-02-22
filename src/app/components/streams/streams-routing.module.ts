import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamsComponent } from './streams/streams.component';

const routes: Routes = [{ path: '', component: StreamsComponent }];
//localhost:/3000/streams
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamsRoutingModule {}
