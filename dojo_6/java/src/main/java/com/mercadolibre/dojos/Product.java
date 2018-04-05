package com.mercadolibre.dojos;

/**
 * Created by dsanchez on 7/10/17.
 */
public interface Product {
    Profit profit(SellingPrice sellingPrice);
    Cost accumulatedCost(Cost c);
}
