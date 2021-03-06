import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Product } from '@shared/models/product.model'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input()
  public product: Product | null | undefined

  @Input()
  public loading = false

  public get productLink(): string {
    return `/catalog/product-detail/${this.product!.details.uid}`
  }
}
