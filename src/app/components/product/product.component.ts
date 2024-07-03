import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../product.type';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnChanges {
  @Input() product!: Product;

  firstName?: string;
  otherName?: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.product) {
      const titles: string[] = this.product.name.split(' ');
      
      this.firstName = titles[0];
      this.otherName = titles.filter((t: string, i: number) => i > 0).join(' ');
    }
  }
}
