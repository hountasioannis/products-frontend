import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product, ProductAPIList } from '../products.interfaces';
import { Subscription } from 'rxjs';
import { orderBy } from 'lodash-es';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  constructor(private productService: ProductsService) {}
  

  loading = false
  productList: Product[] =[]
  subscription: Subscription | undefined

  productSortType: 'asc' | 'desc' = "asc"
  

  ngOnInit(): void {
    console.log('Starting findall API call')
    this.loading = true
    this.productService.findAll().subscribe({
      next: (apiData:ProductAPIList) => {
        const {status, data} = apiData
        this.productList = data
        console.log(status, data)
      },
      error: (error) => {
        this.loading = false
        console.log(error)},
      complete: () => {
        this.loading = false
        console.log("API call completed")
      },
    
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  toggleSort(key:string) {
    switch (key) {
      case 'product':
        this.productSortType = this.productSortType === 'asc' ? 'desc' : 'asc'
        this.productList = orderBy(this.productList, [key, [this.productSortType]])
        break;
      default:
        break;
    }
  }
}
