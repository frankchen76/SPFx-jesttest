/// <reference types="mocha" />

import { assert, expect } from 'chai';
import { sp } from "@pnp/sp";
import { SPFetchClient } from "@pnp/nodejs";
import { bootstrap } from 'pnp-auth';
import { SPOOrderService } from '../Order/SPOOrderService';
import { IOrderService } from '../Order/IOrderService';
// import NodeFetchClient from 'pnp-auth';


describe('SPOOrderService.test', () => {
    // let app = require("../../../spoapp.config.json");
    // sp.setup({
    //     sp: {
    //         fetchClientFactory: () => {
    //             return new SPFetchClient(app.url, app.appId, app.appSecret);
    //         },
    //     },
    // });

    let appuser = require("../../../spouser.config.json");
    bootstrap(sp, {
        "username": appuser.username,
        "password": appuser.password
    },
        appuser.url);

    let _iOrderService: IOrderService = new SPOOrderService();
    beforeEach(() => {
    });

    afterEach(() => {
    });


    it('getOrder()', (done) => {
        //debugger;
        _iOrderService.getOrders()
            .then(result => {
                assert(result.length > 0);
                done();
            })
            .catch(error => {
                console.log(error);
                assert(false, error);
                done();
            });
    });

});
