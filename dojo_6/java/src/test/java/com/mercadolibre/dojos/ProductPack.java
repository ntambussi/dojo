package com.mercadolibre.dojos;

/**
 * Created by dsanchez on 7/10/17.
 */
public class ProductPack implements Product {
    private final Integer quantity;
    private final Cost cost;

    public ProductPack( Integer quantity, Cost cost) {
        this.quantity = quantity;
        this.cost = cost;
    }

    private Cost getCostPerItem() {
        return this.cost.divide( this.quantity );
    }
    public Double profit(SellingPrice sellingPrice) {
        return sellingPrice.minus(this.getCostPerItem());
    }

    public Cost accumulatedCost(Cost c) {
        return c.sum(this.getCostPerItem());
    }
}
