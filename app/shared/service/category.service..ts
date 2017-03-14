import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Product } from "../domain/product";
import { CategoryDao } from "../../shared/dao/category.dao";

@Injectable()
export class CategoryService {
  constructor(categoryDao: CategoryDao, http: Http) {}

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