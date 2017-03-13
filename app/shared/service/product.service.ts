import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Product } from "../domain/product";
import { ProductDao } from "../../shared/dao/product.dao";

@Injectable()
export class ProductService {
  constructor(productDao: ProductDao, http: Http) {}

  load() {
    console.log("load method");
    
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

  add(name: string) {
    console.log("add method");
  }
}