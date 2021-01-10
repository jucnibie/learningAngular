import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { IProduct } from 'src/app/product';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe(pramas => {
    //   const id = pramas.get('id');
    //   this.productService.findProductbyId(id).subscribe(
    //     item => this.product = item
    //   )
    // });

    // Using Higher-Order Observable to avoid nested subscribe anti-pattern
    this.activatedRoute.paramMap.pipe(
      map(pramas => pramas.get('id')),
      switchMap(ID => this.productService.findProductbyId(ID))
    ).subscribe(item => this.product = item);
  }

  backToList() {
    this.router.navigate(['/products']);
  }

}
