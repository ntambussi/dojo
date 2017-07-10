package com.mercadolibre.dojos;

/**
 * Created by dsanchez on 7/10/17.
 */
public class SellingPrice {
    private Double value;
    public SellingPrice(Double value) {
        this.value = value;
    }

    public SellingPrice(Integer value) {
        this.value = value.doubleValue();
    }

    public Double minus(Cost cost) {
        return this.value - cost.asDouble();
    }

    public Double asDouble() {
        return this.value;
    }
}
