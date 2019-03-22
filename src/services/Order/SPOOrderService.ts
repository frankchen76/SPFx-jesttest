import { sp, Web } from '@pnp/sp';
import { OrderListItem } from "./OrderListItem";
import { IOrderService } from './IOrderService';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export class SPOOrderService implements IOrderService {
    private _listName = "TestOrder";
    constructor() {
    }

    public getOrders(): Promise<OrderListItem[]> {
        let list = sp.web.lists.getByTitle(this._listName).items;

        //sp.web.lists.getByTitle("").getItemsByCAMLQuery()
        return list.getAll()
            .then(listItems => {
                return listItems.map((listItem: any): OrderListItem => {
                    let newEntity = {
                        id: listItem["ID"],
                        title: listItem["Title"]
                    }
                    return newEntity;
                });
            });
    }
}

