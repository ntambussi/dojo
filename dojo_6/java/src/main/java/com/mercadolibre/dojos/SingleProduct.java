package com.mercadolibre.dojos;


/**
 * Created by dsanchez on 7/10/17.
 */
public class SingleProduct implements Product {
    Cost cost;
    public SingleProduct(Cost cost) {
        this.cost = cost;
    }

    public Profit profit(SellingPrice sellingPrice) {
        return new Profit( sellingPrice.minus(this.cost) );
    }

    public Cost accumulatedCost(Cost c) {
        return c.sum(this.cost);
    }
}
