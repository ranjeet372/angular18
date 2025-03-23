import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { product } from '../../../models/product.model';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  addProductRequest: product = {
    id: '',
    title: '',
    description: '',
    category: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
  }

  constructor(private productService: ProductsService, private router: Router) { }

  addProduct() {
    this.productService.addProduct(this.addProductRequest).subscribe({
      next: (product) => {
        console.log(product);
        this.router.navigate(['product-list'])
      }
    });

  }
}
