import { Product } from "../domain/product";
import { OrderedItem } from "../domain/ordered.item";
import { User } from "../domain/user";

export class PurchaseOrder {
    user: User;
	totalAmount: number;
	orderedItems: Array<OrderedItem>;
	
    constructor() {
        this.orderedItems = [];
		this.user = new User();
    }
}
