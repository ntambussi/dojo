package com.mercadolibre.dojos;

/**
 * Created by dsanchez on 7/10/17.
 */
public class UnitSale {
    private final Product product;
    private final SellingPrice sellingPrice;

    public UnitSale(Product product, SellingPrice sellingPrice) {
        this.product = product;
        this.sellingPrice = sellingPrice;
    }

    public Double profit() {
        return product.profit( sellingPrice );
    }
}
