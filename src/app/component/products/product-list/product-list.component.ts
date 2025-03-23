import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { product } from '../../../models/product.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productList: product[] = [];

  constructor(private productService: ProductsService) {
    console.log('Constructor is called!');
  }
  
  ngOnInit(): void {
    console.log('Hello...');
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response);
        this.productList = response;
      },
      error: (response) => {
        console.log(response);
      }
    }
    )
  }
}
