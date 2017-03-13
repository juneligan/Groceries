import { Product } from "../domain/product";
import { Category } from "../domain/category";

export class OrderedItem {
    orderedItemId: number;
	productId: number;
	product: Product;
	price: number;
	quantity: number;
	category: Category;
	amount: number;

    constructor() {
        this.product = new Product();
		this.category = new Category();
    }
}