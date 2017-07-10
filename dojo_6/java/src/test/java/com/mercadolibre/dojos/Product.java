package com.mercadolibre.dojos;

/**
 * Created by dsanchez on 7/10/17.
 */
public interface Product {
    public Double profit(SellingPrice sellingPrice);
    public Cost accumulatedCost(Cost c);
}
