package com.mercadolibre.dojos;

/**
 * Created by dsanchez on 7/10/17.
 */
public class Cost {
    private Double value;

    public Cost(Double value) {
        this.value = value;
    }

    public Cost(Integer value) {
        this.value = value.doubleValue();
    }

    public Cost sum(Cost c) {
        return new Cost(this.value + c.asDouble());
    }

    public Cost divide(Integer i) {
        return new Cost(this.value / i.doubleValue());
    }

    public Double asDouble() {
        return value;
    }
}
