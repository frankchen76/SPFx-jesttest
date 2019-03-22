import { IOrderService } from "./IOrderService";
import { OrderListItem } from "./OrderListItem";

export class MockOrderService implements IOrderService {
    constructor() {
    }

    public getOrders(): Promise<OrderListItem[]> {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }

}
