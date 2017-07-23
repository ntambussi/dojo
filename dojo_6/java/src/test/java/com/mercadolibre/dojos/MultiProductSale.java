package com.mercadolibre.dojos;

import java.util.LinkedList;
import java.util.List;

import static java.util.Arrays.*;

/**
 * Created by dsanchez on 7/10/17.
 */
public class MultiProductSale {

    private final SingleSellingPrice singleSellingPrice;
    private final List<Product> products;

    public MultiProductSale(Product products[], SingleSellingPrice singleSellingPrice) {
        this.products = new LinkedList<Product>(asList(products));
        this.singleSellingPrice = singleSellingPrice;
    }

    public MultiProductSale(int quantity, Product product, SingleSellingPrice singleSellingPrice) {
        this.products = new LinkedList<Product>();
        this.singleSellingPrice = singleSellingPrice;

        while (quantity > 0 ) {
            this.products.add(product);
            quantity--;
        }
    }

    public Profit profit() {
        return new Profit( this.singleSellingPrice.minus(this.accumalatedCost()) );
    }

    private Cost accumalatedCost() {
        Cost result = new Cost(0.0);

        for( Product p : this.products) result = p.accumulatedCost(result);

        return result;
    }
}
