import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { routes } from './feedback-routes'

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class FeedbackRoutingModule {}