import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product.type';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  products: Product[] = [];

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'Burberry Flowy Dress with pink and gold',
        price: 129.99,
        image: 'assets/images/Image-Master-6.png',
        rental: 12,
        size: 4
      },
      {
        id: 1,
        name: 'Prada Beach dress',
        price: 129.99,
        image: 'assets/images/Image-Master-2.png',
        rental: 12,
        size: 8
      },
      {
        id: 2,
        name: 'Bhandage Red dress for evening wear',
        price: 129.99,
        image: 'assets/images/Image-Master-1.png',
        rental: 12,
        size: 12
      },
      {
        id: 3,
        name: 'Prada Wedding guest',
        price: 129.99,
        image: 'assets/images/Image-Master-3.png',
        rental: 12,
        size: 12
      },
      {
        id: 4,
        name: 'Ansell Nighwear',
        price: 129.99,
        image: 'assets/images/Image-Master-4.png',
        rental: 12,
        size: 14
      },
      {
        id: 5,
        name: 'Descada Summer dress',
        price: 129.99,
        image: 'assets/images/Image-Master-5.png',
        rental: 12,
        size: 8
      }
    ];
  }
}
