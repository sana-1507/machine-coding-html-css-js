// Programming / Hands-on Questions
//📋⌨️ You're building a product listing page where user filters trigger backend calls
//  (e.g., getProducts(query: string)), and only the latest result should be reflected in the UI.
// Task:
// Write a service method using HttpClient that handles debounced user input and cancels outdated requests
// Use RxJS operators like debounceTime, switchMap, and catchError
// Show how this observable is consumed in the component with the async pipe
// Expected focus:
// Proper use of FormControl.valueChanges.pipe(...)
// Avoiding memory leaks and redundant requests
// Usage of Angular async pipe for subscription management


//Note: Following code is to illustrate debounced search functionality, code needs to be moved to 
//appropriate files and structured as per Angular best practices.


//Service layer
function getProducts(query:string, http: any) {
    return this.http.get(`/api/products?search=${query}`);
}

//Component layer(core logic)

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, catchError, of, distinctUntilChanged } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {

    searchControl = new FormControl('');
    products$ = this.searchControl.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(query => this.productService.getProducts(query).pipe(catchError(() => of([])) ))

    );


    //Template
    <html>
    <input [formControl]="searchControl" placeholder="Search products...">
    
    <div *ngFor = "let product of products$ | async">
    </div>
    </html>
    