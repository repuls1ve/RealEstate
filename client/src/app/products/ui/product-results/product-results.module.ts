import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { TimesPipeModule } from 'src/app/shared/pipes/times/times.module'
import { ProductCardModule } from '../product-card/product-card.module'
import { ProductResultsComponent } from './product-results.component'

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ProductCardModule,
    NgxSkeletonLoaderModule,
    TimesPipeModule    
  ],
  declarations: [ProductResultsComponent],
  exports: [ProductResultsComponent]
})
export class ProductResultsModule {}