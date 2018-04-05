package com.mercadolibre.dojos;

/**
 * Created by dsanchez on 7/21/17.
 */
public class Profit {
    private Object value;
    public Profit(Object v) {
        this.value = v;
    }

    public boolean equals(Object other) {
        Profit otherProfit = (Profit)other;

        return this.value.equals( otherProfit.value );
    }
}
