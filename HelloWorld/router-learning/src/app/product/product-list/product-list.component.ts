import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { IProduct } from 'src/app/product';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: IProduct[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    public userService: UserService
    ) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(items => this.productList = items);
    this.activatedRoute.queryParamMap.subscribe(
      query => {
        const orderBy = query.get('orderby');
      }
    )
  }

}
