package com.mercadolibre.dojos;

/**
 * Created by dsanchez on 7/10/17.
 */
public class SingleSellingPrice implements SellingPrice {
    private Double value;
    public SingleSellingPrice(Double value) {
        this.value = value;
    }

    public SingleSellingPrice(Integer value) {
        this.value = value.doubleValue();
    }

    public Double minus(Cost cost) {

        return this.value - cost.asDouble();
    }
}
