import { OrderListItem } from "./OrderListItem";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IOrderService {
    getOrders(): Promise<OrderListItem[]>;
}
