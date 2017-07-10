package com.mercadolibre.dojos;

import java.util.LinkedList;
import java.util.List;

import static java.util.Arrays.*;

/**
 * Created by dsanchez on 7/10/17.
 */
public class MultiProductSale {

    private final SellingPrice sellingPrice;
    private final List<Product> products;

    public MultiProductSale(Product products[], SellingPrice sellingPrice) {
        this.products = new LinkedList<Product>(asList(products));
        this.sellingPrice = sellingPrice;
    }

    public MultiProductSale(int quantity, Product product, SellingPrice sellingPrice) {
        this.products = new LinkedList<Product>();
        this.sellingPrice = sellingPrice;

        while (quantity > 0 ) {
            this.products.add(product);
            quantity--;
        }
    }

    public Double profit() {
        return this.sellingPrice.minus( this.accumalatedCost() );
    }

    private Cost accumalatedCost() {
        Cost result = new Cost(0.0);

        for( Product p : this.products) result = p.accumulatedCost(result);

        return result;
    }
}
