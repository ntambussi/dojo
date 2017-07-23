package com.mercadolibre.dojos;

/**
 * Created by dsanchez on 7/10/17.
 */
public interface Product {
    public Profit profit(SellingPrice singleSellingPrice);
    public Cost accumulatedCost(Cost c);
}
