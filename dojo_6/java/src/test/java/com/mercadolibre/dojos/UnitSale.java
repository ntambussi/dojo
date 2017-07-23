package com.mercadolibre.dojos;

/**
 * Created by dsanchez on 7/10/17.
 */
public class UnitSale {
    private final Product product;
    private final SellingPrice singleSellingPrice;

    public UnitSale(Product product, SellingPrice singleSellingPrice) {
        this.product = product;
        this.singleSellingPrice = singleSellingPrice;
    }

    public Profit profit() {
        return product.profit(singleSellingPrice);
    }
}
